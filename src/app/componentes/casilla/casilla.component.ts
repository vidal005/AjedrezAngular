import { Component, OnInit, Input } from '@angular/core';
import { Casilla } from 'src/app/modelo/casilla';
import { ServiceService } from 'src/app/servicio/service.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { WebSocketService } from 'src/app/servicio/web-socket.service';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.css']
})
export class CasillaComponent implements OnInit {

  @Input() casilla:Casilla;
  constructor(public servicio : ServiceService,public serviciows : WebSocketService) { }
  ngOnInit(): void {
  }

  onClickMe(posicion:number){
    var movimientos = this.servicio.getPosiblesPosiciones(posicion);
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      element.resaltar = "null";
    });
    casillas[posicion].resaltar = "green-select";
    for (let index = 0; index < movimientos.length; index++) {
      var casilla = casillas[movimientos[index]];
      if(casilla.pieza != null){
        casilla.resaltar = "green-select";
      }
      else{
        casilla.resaltar = "green";
      }
    }
  }

  onDragStart(ev, posicion){
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      element.resaltar = "null";
    });

    var movimientos = this.servicio.getPosiblesPosiciones(posicion);
    casillas[posicion].resaltar = "green-select";
    for (let index = 0; index < movimientos.length; index++) {
      var casilla = casillas[movimientos[index]];
      if(casilla.pieza != null){
        casilla.resaltar = "green-select";
      }
      else{
        casilla.resaltar = "green";
      }
      ev.dataTransfer.setData("posicion", ev.target.parentElement.id)
    }
  }

  onDrop(ev){
    ev.preventDefault();
    let movimientos: number[];
    if(this.servicio.casillas[ev.dataTransfer.getData("posicion")] != null
      && this.servicio.casillas[ev.dataTransfer.getData("posicion")].pieza.color == this.servicio.jugador
      && this.servicio.casillas[ev.dataTransfer.getData("posicion")].pieza.color == this.servicio.getTurno() ){
      movimientos = this.servicio.getPosiblesPosiciones(ev.dataTransfer.getData("posicion"));

      let casilla = movimientos.find(element => element == ev.target.parentElement.id);

      if(casilla){
        this.servicio.casillas[casilla].pieza = this.servicio.casillas[ev.dataTransfer.getData("posicion")].pieza;
        this.servicio.casillas[ev.dataTransfer.getData("posicion")].pieza = null;
        if((this.servicio.getXY(casilla)[0] == 0 || this.servicio.getXY(casilla)[0] == 7) 
        && this.servicio.casillas[casilla].pieza.id.substr(0,1) == "p")
        {
          this.servicio.casillas[casilla].pieza.id = "q"+ this.servicio.casillas[casilla].pieza.id.substr(1);
          this.servicio.casillas[casilla].pieza.imagen = (this.servicio.casillas[casilla].pieza.color == "white")? this.servicio.imagenQueenWhite:this.servicio.imagenQueenBlack;
        }
        this.serviciows.sendMessage(this.servicio.jugador+ev.dataTransfer.getData("posicion")+"-"+casilla);
      }
      this.servicio.setTurno((this.servicio.jugador == "white")? "black":"white");
      this.servicio.actualizarAmenazadasBlack();
      this.servicio.actualizarAmenazadasWhite();
  }
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      element.resaltar = "null";
    });

  }

  onDragOver(ev){
    ev.preventDefault();

  }
}
