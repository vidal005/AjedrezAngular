import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private chat : any[];
  constructor(private servicio: ServiceService) { 
    this.chat = servicio.getChat();
  }

  ngOnInit(): void {
  }

}
