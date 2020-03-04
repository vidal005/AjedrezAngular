import { Injectable, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';
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
  constructor(private servicio : ServiceService) {
    this.iniciarConexionWebSocket();
  }

  iniciarConexionWebSocket(){
    console.log("iniciarConexion");
  
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/move/room1", (message) => {
        if(message.body) {
          that.servicio.hacerMovimiento(message.body);
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/move/room1" , {}, message);
  }
}
