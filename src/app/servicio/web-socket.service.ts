import { Injectable, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';
import { ServiceService } from './service.service';
import { Message } from '../modelo/message';
import { ComWS } from '../modelo/dto/com-ws';

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

  constructor(private servicio : ServiceService) {
    //this.iniciarConexionWebSocket();
  }


  desconectarServicios(){
    this.stompClient.disconnect();
    this.stompClientChat.disconnect();
    this.stompClientCom.disconnect();
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
            that.servicio.listenWSCom(message.body );
            that.ultimoMsgCom = message.body;
          }
          
          console.log(message.body);
        }
      });
    });
    
  }

  sendMessage(message){
    this.stompClient.send("/app/send/move/"+ JSON.parse(sessionStorage.getItem('room')).id , {}, message);
  }
  
  sendChatMessage(message:Message){
    this.stompClientChat.send("/app/send/chat/"+ JSON.parse(sessionStorage.getItem('room')).id , {},JSON.stringify( message));
  }

  sendCom(com:ComWS){
    this.stompClientCom.send("/app/send/com/"+ JSON.parse(sessionStorage.getItem('room')).id , {},JSON.stringify(com));
  }

}
  