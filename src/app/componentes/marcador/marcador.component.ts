import { Component, OnInit, NgZone, Input, ChangeDetectorRef } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { ServiceService } from 'src/app/servicio/service.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Partida } from 'src/app/modelo/partida';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  @Input() partida:Partida;
  @Input() colorJugador: String;
  //public primeraVez: string = '..........';
  

  constructor(public servicioREST: RESTservicioService, public servicioAjedrez: ServiceService,public cd: ChangeDetectorRef) {

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


  async rendirse() {
    this.servicioAjedrez.partida.resultado = (this.servicioAjedrez.colorJugador == 'white') ? 'black' : 'white';
    await this.servicioREST.actualizarPartida(this.servicioAjedrez.partida);
  }

  async ofreceerTablas() {

  }

}
