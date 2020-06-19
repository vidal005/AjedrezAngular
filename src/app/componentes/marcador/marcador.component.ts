import { Component, OnInit, NgZone, Input, ChangeDetectorRef } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { ServiceService } from 'src/app/servicio/service.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';
import { WebSocketService } from 'src/app/servicio/web-socket.service';
import { ComWS } from 'src/app/modelo/dto/com-ws';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  @Input() partida:Partida;
  @Input() colorJugador: String;
  //public primeraVez: string = '..........';
  

  constructor(public servicioREST: RESTservicioService, public servicioAjedrez: ServiceService,
    private servicoWS : WebSocketService, public cd: ChangeDetectorRef, private router : Router) {

    this.partida = this.servicioAjedrez.partida;

    this.servicioAjedrez.componentMethodCalled$.subscribe(
      () => {
        this.detectarCambios();
      }
    );
  
  }

  detectarCambios() {
    this.partida = this.servicioAjedrez.partida;
    this.cd.detectChanges();
    
}

  ngOnInit(): void {
    /*if (sessionStorage.getItem('room') != '' && sessionStorage.getItem('room') != 'null' && sessionStorage.getItem('room') != null && JSON.parse(sessionStorage.getItem('room')) != null) {
      this.jugadorBlancas = JSON.parse(sessionStorage.getItem('room')).partida.jugadorBlancas;
      this.jugadorNegras = JSON.parse(sessionStorage.getItem('room')).partida.jugadorNegras;
      //this.primeraVez = false;
      
    } else {
      //this.primeraVez = true;
      this.jugadorBlancas = JSON.parse(sessionStorage.getItem('usuario'));
      //window.location.reload();

    }*/

    this.colorJugador = this.servicioAjedrez.colorJugador;

    //this.jugadorNegras = this.servicioAjedrez.partida?.jugadorNegras;
  }


  public async rendirse() {
    this.servicioAjedrez.partida.resultado = (this.servicioAjedrez.jugador.id == this.servicioAjedrez.partida.jugadorBlancas.id)?
    this.servicioAjedrez.partida.jugadorNegras.id : this.servicioAjedrez.partida.jugadorBlancas.id;
    await this.servicioREST.actualizarPartida(this.servicioAjedrez.partida);
    let comRendirse = new ComWS();
    comRendirse.id = this.servicioAjedrez.jugador.id;
    comRendirse.message = 'rendirse';
    comRendirse.nick = this.servicioAjedrez.jugador.nick;
    comRendirse.color = this.servicioAjedrez.colorJugador;

    this.servicoWS.sendCom(comRendirse);

    alert('Has perdio :( ');

    this.servicioAjedrez.finalizarPartida();
  }

  public async ofrecerTablas() {
    let comTablas = new ComWS();
      comTablas.id = this.servicioAjedrez.jugador.id;
      comTablas.message = 'tablas';
      comTablas.nick = this.servicioAjedrez.jugador.nick;
      comTablas.color = this.servicioAjedrez.colorJugador;
      
      this.servicoWS.sendCom(comTablas);

      alert('Esperando respuesta de ' + (this.servicioAjedrez.jugador.id == this.servicioAjedrez.partida.jugadorBlancas.id)?
      this.servicioAjedrez.partida.jugadorNegras.nick : this.servicioAjedrez.partida.jugadorBlancas.nick);

  }

}
