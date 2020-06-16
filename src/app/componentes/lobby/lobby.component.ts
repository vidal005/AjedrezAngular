import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Usuario } from 'src/app/modelo/usuario';
import { AlertServiceService } from 'src/app/alert-service.service';
import { Partida } from 'src/app/modelo/partida';
import { Room } from 'src/app/modelo/room';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  public partidasOnline : Array<Partida> = new Array<Partida>();
  public roomsOnline : Array<Partida>;

  constructor(private servicio:RESTservicioService, private alertService :AlertServiceService) {

    this.servicio.getPartidasOnline().subscribe(
      (data : Array<Partida>) => {

          this.partidasOnline = data;
      },
      error => {   
          this.alertService.error(error);
          this.partidasOnline = [];
      });


     
   }

  async ngOnInit() {

    let datos : any = await this.servicio.getRooms();
    this.roomsOnline = datos;
  }

}
