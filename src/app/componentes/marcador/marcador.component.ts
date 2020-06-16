import { Component, OnInit, NgZone } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { ServiceService } from 'src/app/servicio/service.service';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  public jugadorBlancas : Usuario;
  public jugadorNegras : Usuario;
  public colorJugador : String;

  constructor(public servicioREST: RESTservicioService, public  servicioAjedrez : ServiceService , public zone:NgZone) { 
    if(sessionStorage.getItem('room') != '' && sessionStorage.getItem('room') != 'null' && sessionStorage.getItem('room') != null && JSON.parse(sessionStorage.getItem('room')) !=null ){
      this.jugadorBlancas = JSON.parse(sessionStorage.getItem('room')).partida.jugadorBlancas;
      this.jugadorNegras = JSON.parse(sessionStorage.getItem('room')).partida.jugadorNegras;
    }else{
      this.jugadorBlancas = JSON.parse(sessionStorage.getItem('usuario'));
    }
    
  }

  ngOnInit(): void {

    
    if(JSON.parse(sessionStorage.getItem('room')) != null){
      this.jugadorBlancas = JSON.parse(sessionStorage.getItem('room')).partida.jugadorBlancas;
      this.jugadorNegras = JSON.parse(sessionStorage.getItem('room')).partida.jugadorNegras;
    }

    this.colorJugador = this.servicioAjedrez.colorJugador;

    this.zone.run(() => {
      console.log('enabled time travel');
  });
  }

  async rendirse(){
    this.servicioAjedrez.partida.resultado = (this.servicioAjedrez.colorJugador == 'white')? 'black':'white';
    await this.servicioREST.actualizarPartida(this.servicioAjedrez.partida);
  }

  async ofreceerTablas(){

  }

}
