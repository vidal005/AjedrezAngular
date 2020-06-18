import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';
import { ServiceService } from 'src/app/servicio/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/modelo/room';
import { JsonPipe } from '@angular/common';
import { WebSocketService } from 'src/app/servicio/web-socket.service';
import { ComWS } from 'src/app/modelo/dto/com-ws';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {


  
  public partida : Partida = this.servicioAjedrez.partida;
  public room : Room = this.servicioAjedrez.room;
  public jugadorBlancas : Usuario = this.servicioAjedrez.partida.jugadorBlancas;
  public jugadorNegras : Usuario = this.servicioAjedrez.partida.jugadorNegras;
  public roomId: Number;
  com: ComWS;
  

  constructor(public servicio:RESTservicioService, public servicioAjedrez:ServiceService,private ruta:ActivatedRoute,
     private route : Router,public zone:NgZone,public servicioWS:WebSocketService, private cd:ChangeDetectorRef) {


      this.servicioAjedrez.componentMethodCalled$.subscribe(
        () => {
          this.detectarCambios();
        }
      );

      //"/partida/;id"
    if(ruta.snapshot.params.id){
      this.roomId = ruta.snapshot.params.id;
    }

    //"/partida"
    else{
      this.partida = new Partida();
      this.partida.resultado = 'Waiting';
      this.partida.movimientos = '';
      this.partida.jugadorBlancas = JSON.parse(sessionStorage.getItem('usuario'));
      this.partida.jugadorBlancas.estado = 'inGame';
      sessionStorage.setItem('usuario', JSON.stringify(this.partida.jugadorBlancas));
      
      this.servicioAjedrez.colorJugador = 'white';
      this.servicioAjedrez.partida = this.partida;
      this.servicioAjedrez.jugador = this.partida.jugadorBlancas;
      this.servicio.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
      
    }
    //this.servicio.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
    //this.servicioAjedrez.jugador = servicio.currentUser;

  }

  detectarCambios() {
    this.partida = this.servicioAjedrez.partida;
    this.cd.detectChanges();
    
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
        this.servicioAjedrez.partida = this.room.partida;
        this.servicioAjedrez.room = this.room;
        this.servicio.currentUser = this.servicioAjedrez.jugador;
        sessionStorage.setItem('usuario', JSON.stringify(this.servicioAjedrez.jugador));
        sessionStorage.setItem('room', JSON.stringify(this.room));
        let com = new ComWS();
        com.id = this.servicio.currentUser.id;
        com.message = 'enterGame';
        com.color = this.servicioAjedrez.colorJugador;
        this.com = com;
        
      }
      
    }
    else{

      //"/partida"
      this.servicioAjedrez.partida
      let partida : any = await this.servicio.crearPartida(this.partida);
      this.partida = partida;
      this.servicioAjedrez.partida = partida;

      let room : any =  await this.servicio.crearRoom(this.partida);
      
      this.room = room;
      sessionStorage.setItem('room', JSON.stringify(this.room));
      this.route.navigateByUrl('/partida/' + this.room.id);
      
    }

   
  //Subscribirse a los servicios WebSocket de Movimientos , Chat y comunicaciones
    await this.servicioWS.iniciarConexionWebSocket();
    await this.servicioWS.iniciarConexionWebSocketChat();
    await this.servicioWS.iniciarConexionWebSocketCom();
    if(this.com){
    this.ionViewDidLoad();
    }
  }
    
   
  ionViewDidLoad(){
    setTimeout(() => {
        alert('Comienza la partida');
      
        this.servicioWS.sendCom(this.com);
      
    }, 1000);
}
    

}
