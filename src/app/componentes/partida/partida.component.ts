import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {


  public jugadorBlancas: Usuario;
  public jugadorNegras: Usuario;
  public partida : Partida;
  constructor(public servicio:RESTservicioService, public servicioAjedrez:ServiceService) {

    this.jugadorBlancas = servicio.currentUser;
    this.servicioAjedrez.jugador = servicio.currentUser;
    this.partida = new Partida();
    this.partida.jugadorBlancas = this.servicio.currentUser;
    this.partida.resultado = 'Waiting';
    this.partida.movimientos = '';
   }

  ngOnInit(): void {
    this.servicio.crearPartida(this.partida).subscribe();
    this.servicioAjedrez.colorJugador = 'white';
  }

}
