import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Message } from 'src/app/modelo/message';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebSocketService } from 'src/app/servicio/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chat : Message[] = [];


  constructor(public servicio: ServiceService,public zone:NgZone, public servicioWS : WebSocketService) { 
    this.chat = this.servicio.getChat();
  }

  ngOnInit(): void {
    
  }


  send(message:String){
    let m = new Message();
    m.nick = JSON.parse(sessionStorage.getItem('usuario')).nick;
    m.message = message;
    this.servicioWS.sendChatMessage(m);
    this.zone.run(() => {
      console.log('enabled time travel');
  });
  }


}
