import { Component, OnInit, NgZone } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';
import { ServiceService } from 'src/app/servicio/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/modelo/room';
import { JsonPipe } from '@angular/common';
import { WebSocketService } from 'src/app/servicio/web-socket.service';

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
  public roomId: Number;
  

  constructor(public servicio:RESTservicioService, public servicioAjedrez:ServiceService,private ruta:ActivatedRoute,
     private route : Router,public zone:NgZone,public servicioWS:WebSocketService) {

    if(ruta.snapshot.params.id){
      this.roomId = ruta.snapshot.params.id;
      
    }
    else{
      this.partida = new Partida();
      this.partida.resultado = 'Waiting';
      this.partida.movimientos = '';
      this.partida.jugadorBlancas = JSON.parse(sessionStorage.getItem('usuario'));
      this.partida.jugadorBlancas.estado = 'inGame';
      sessionStorage.setItem('usuario', JSON.stringify(this.partida.jugadorBlancas));
      this.servicioAjedrez.colorJugador = 'white';
      servicio.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
      this.jugadorBlancas = servicio.currentUser;
    }
    servicio.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
    this.servicioAjedrez.jugador = servicio.currentUser;

  }
  async ngOnInit() {

    if(this.roomId){
      if(this.servicio.currentUser.estado == 'inGame'){
        let r : any =  await this.servicio.getRoom(this.roomId);
        this.room = r;
        this.partida = r.partida;
        
        sessionStorage.setItem('room', JSON.stringify(this.room));
      }
      else{
        let data : any = await this.servicio.entrarRoom(this.roomId);
        this.room = data;
        this.partida = this.room.partida;
        this.servicioAjedrez.jugador = JSON.parse(sessionStorage.getItem('usuario'));
        this.servicioAjedrez.jugador.estado = 'inGame';
        this.servicioAjedrez.colorJugador = 'black';
        this.servicio.currentUser = this.servicioAjedrez.jugador;
        sessionStorage.setItem('usuario', JSON.stringify(this.servicioAjedrez.jugador));
        sessionStorage.setItem('room', JSON.stringify(this.room));
      }
      
    }
    else{

      let partida : any = await this.servicio.crearPartida(this.partida);
      this.partida = partida;
      this.servicioAjedrez.partida = partida;
      let room : any =  await this.servicio.crearRoom(this.partida);
      this.room = room;
      this.route.navigateByUrl('/partida/' + this.room.id);
      
    }

    this.zone.run(() => {
      console.log('enabled time travel');
  });

  
  this.servicioWS.iniciarConexionWebSocket();
  this.servicioWS.iniciarConexionWebSocketChat();
  }
    
   

    

}
