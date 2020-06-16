import { Injectable, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';
import { ServiceService } from './service.service';
import { Message } from '../modelo/message';

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

  constructor(private servicio : ServiceService) {
    //this.iniciarConexionWebSocket();
  }

  iniciarConexionWebSocket(){
    console.log("iniciarConexion");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/move/" + JSON.parse(sessionStorage.getItem('room')).id, (message) => {
        if(message.body) {
          that.servicio.hacerMovimiento(message.body);
          console.log(message.body);
        }
      });
    });
  }

  iniciarConexionWebSocketChat(){
    console.log("iniciarConexionChat");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClientChat = Stomp.over(ws);
    let that = this;
    this.stompClientChat.connect({}, function(frame) {
      that.stompClientChat.subscribe("/chat/" + JSON.parse(sessionStorage.getItem('room')).id, (message) => {
        if(message.body) {
          that.servicio.getChat().push(JSON.parse(message.body));
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/move/"+ JSON.parse(sessionStorage.getItem('room')).id , {}, message);
  }
  
  sendChatMessage(message:Message){
    this.stompClient.send("/app/send/chat/"+ JSON.parse(sessionStorage.getItem('room')).id , {},JSON.stringify( message));
  }

}
  