import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';
import { ServiceService } from 'src/app/servicio/service.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/modelo/room';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {


  public jugadorBlancas: Usuario;
  public jugadorNegras: Usuario;
  public partida : Partida;
  public room : Room;
  

  constructor(public servicio:RESTservicioService, public servicioAjedrez:ServiceService,private ruta:ActivatedRoute) {

    if(ruta.snapshot.params.id){
      this.servicio.getRoom(ruta.snapshot.params.id).subscribe(
        (data : Room) => {
        this.room = data;
        this.partida = this.room.partida;
        
    },
    error => {   
        
    });
    }
    else{
      this.partida = new Partida();
      this.partida.resultado = 'Waiting';
      this.partida.movimientos = '';
    }
    this.jugadorBlancas = servicio.currentUser;
    this.servicioAjedrez.jugador = servicio.currentUser;
    
    this.partida.jugadorBlancas = this.servicio.currentUser;
    
   }

  ngOnInit(): void {
    let partida = this.servicio.crearPartida(this.partida).subscribe(
      (data : Partida) => {
          this.servicioAjedrez.partida = data;
          this.servicio.crearRoom(data);
      },
      error => {   
          
      });
    this.servicioAjedrez.colorJugador = 'white';
  }

}
