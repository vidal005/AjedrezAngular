import { Injectable, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

import { Message } from '../modelo/message';
import { ComWS } from '../modelo/dto/com-ws';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnInit {
  
  ngOnInit(): void {
    
  }
  private serverUrl = 'http://localhost:8088/socket'
  private title = 'WebSockets chat';
  private stompClient;
  private stompClientChat;
  private stompClientCom;
  private ultimoMsgMove : String;
  private ultimoMsgChat : String;
  private ultimoMsgCom: String;

  constructor(public  servicio : ServiceService) {
    //this.iniciarConexionWebSocket();
  }


  desconectarServicios(){
    this.stompClient?.disconnect();
    this.stompClientChat?.disconnect();
    this.stompClientCom?.disconnect();
  }

  async iniciarConexionWebSocket(){
    console.log("iniciarConexion Moves");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    await this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/move/" + JSON.parse(sessionStorage.getItem('room')).id, (message) => {
        if(message.body) {
          if(message.body != that.ultimoMsgMove){
            
            that.servicio.hacerMovimiento(message.body);
            if(that.servicio.jaque == "white" || that.servicio.jaque == "black"){
              that.servicio.comprobarJaqueMate();
            }
            that.ultimoMsgMove = message.body;
          }
          
          console.log(message.body);
        }
      });
    });
  }

  async iniciarConexionWebSocketChat(){
    console.log("iniciar Conexion Chat");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClientChat = Stomp.over(ws);
    let that = this;
    await this.stompClientChat.connect({}, function(frame) {
      that.stompClientChat.subscribe("/chat/" + JSON.parse(sessionStorage.getItem('room')).id, (message) => {
        if(message.body) {
          if(message.body != that.ultimoMsgChat){
            that.servicio.getChat().push(JSON.parse(message.body));
            that.ultimoMsgChat = message.body;
          }
          
          console.log(message.body);
        }
      });
    });
  }

  async  iniciarConexionWebSocketCom(){
    console.log("iniciar Conexion Com");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClientCom = Stomp.over(ws);
    
    let that = this;
    return  this.stompClientCom.connect({}, function(frame) {
      that.stompClientCom.subscribe("/com/" + JSON.parse(sessionStorage.getItem('room')).id, (message) => {
        if(message.body) {
          if(message.body != that.ultimoMsgCom){
            that.listenWSCom(message.body );
            that.ultimoMsgCom = message.body;
          }
          
          console.log(message.body);
        }
      });
    });
    
  }

  sendMessage(message){
    this.servicio.callPartidaPauseTimer();
    this.stompClient.send("/app/send/move/"+ JSON.parse(sessionStorage.getItem('room')).id , {}, message);
  }
  
  sendChatMessage(message:Message){
    this.stompClientChat.send("/app/send/chat/"+ JSON.parse(sessionStorage.getItem('room')).id , {},JSON.stringify( message));
  }

  sendCom(com:ComWS){
    this.stompClientCom.send("/app/send/com/"+ JSON.parse(sessionStorage.getItem('room')).id , {},JSON.stringify(com));
  }


  async listenWSCom(body: string) {
    let com = JSON.parse(body)
    let data: any;
    //Si es un mensaje no enviado por nosotros
    if (com.id != this.servicio.jugador.id) {
      switch (com.message) {
        case 'rendirse': {

          alert(""+ com.nick + " se ha rendido, VICTORIA!");
          this.servicio.partida.resultado = (this.servicio.colorJugador == 'black')? this.servicio.partida.jugadorNegras.nick: this.servicio.partida.jugadorBlancas.nick;
          this.servicio.finalizarPartida();
          break;
        }

        case 'enterGame': {
          

          this.servicio.room = await this.servicio.restServicio.getRoom(JSON.parse(sessionStorage.getItem('room')).id);
          sessionStorage.setItem('room', JSON.stringify(this.servicio.room));
          this.servicio.partida = this.servicio.room.partida;
          this.servicio.callComponentMethod();
          alert(this.servicio.partida.jugadorNegras.nick + " entró a la partida.Comienza el juego!");
          this.servicio.callPartidaBeginTimer();
          break;
        }

        case 'tablas': {
          if(window.confirm(""+ com.nick + " ofrece tablas.Aceptar?")){
            this.servicio.room.partida.resultado = 'tablas';
            this.servicio.partida.resultado = 'tablas';
            alert("Partida empatada");
          
            let tablasApccept = new ComWS();
              tablasApccept.color = this.servicio.colorJugador;
              tablasApccept.id = this.servicio.jugador.id;
              tablasApccept.message = 'tablas aceptadas';
              tablasApccept.nick = this.servicio.jugador.nick;

              this.sendCom(tablasApccept);
              this.servicio.finalizarPartida();
          }
          else{
            let tablasRechazadas = new ComWS();
            tablasRechazadas.color = this.servicio.colorJugador;
            tablasRechazadas.id = this.servicio.jugador.id;
            tablasRechazadas.message = 'tablas rechazadas';
            tablasRechazadas.nick = this.servicio.jugador.nick;

              this.sendCom(tablasRechazadas);
          }
          break;
        }

        case 'tablas aceptadas' : {
          alert("" + com.nick + " ha aceptado tablas. Partida empatada!")
          this.servicio.finalizarPartida();
          break;
        }

        case 'tablas rechazadas' : {
          alert("" + com.nick + " ha rechazado tu propuesta de tablas. La partida sigue!")
          break;
        }

        case 'tiempo agotado' : {
          this.servicio.partida.resultado = this.servicio.jugador.nick;
          this.servicio.room.partida.resultado = this.servicio.jugador.nick;
          this.servicio.finalizarPartida();
        
          alert("" + com.nick + " ha agotado el tiempo. Victoria!");
          break;
        }
        
      }
    }
  }

}
  