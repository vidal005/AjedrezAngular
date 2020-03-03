import { Injectable, OnInit } from '@angular/core';
import {Stomp} from 'stompjs';
import {SockJS} from 'sockjs-client';
import $ from 'jquery';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnInit {
  ngOnInit(): void {
    //this.iniciarConexionWebSocket();
  }
  private serverUrl = 'http://localhost:8088/socket'
  private title = 'WebSockets chat';
  private stompClient;
  constructor(private servicio : ServiceService) {
  }

  iniciarConexionWebSocket(){
    console.log("iniciarConexion");
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/move", (message) => {
        if(message.body) {
          that.servicio.hacerMovimiento(message.body);
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/move" , {}, message);
  }
}
