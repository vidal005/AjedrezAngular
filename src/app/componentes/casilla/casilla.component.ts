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
    this.servicio.actualizarAmenazadasBlack();
    this.servicio.actualizarAmenazadasWhite();

    var movimientos = this.servicio.getPosiblesPosiciones(posicion);
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      if(element.resaltar != "red-take"){
      element.resaltar = "null";
      }
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

    this.servicio.actualizarAmenazadasBlack();
    this.servicio.actualizarAmenazadasWhite();
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      if(element.resaltar != "red-take"){
      element.resaltar = "null";
      }
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

    this.servicio.actualizarAmenazadasBlack();
    this.servicio.actualizarAmenazadasWhite();
    let movimientos: number[];
    let posicionInicial = ev.dataTransfer.getData("posicion");
    let posicionFinal = ev.target.parentElement.id;
    if(this.servicio.casillas[posicionInicial] != null
      && this.servicio.casillas[posicionInicial].pieza.color == this.servicio.colorJugador
      && this.servicio.casillas[posicionInicial].pieza.color == this.servicio.getTurno() 
      && this.servicio.casillas[posicionFinal] != this.servicio.casillas[posicionInicial]){
      movimientos = this.servicio.getPosiblesPosiciones(ev.dataTransfer.getData("posicion"));

      let move = movimientos.find(posicionFinal);
      //si es un posible movimiento y no es la misma casilla
      if(move ){
        this.servicio.casillas[posicionFinal].pieza = this.servicio.casillas[posicionInicial].pieza;
        this.servicio.casillas[posicionInicial].pieza = null;
        if((this.servicio.getXY(posicionFinal)[0] == 0 || this.servicio.getXY(posicionFinal)[0] == 7) 
        && this.servicio.casillas[posicionFinal].pieza.id.substr(0,1) == "p")
        {
          this.servicio.casillas[posicionFinal].pieza.id = "q"+ this.servicio.casillas[posicionFinal].pieza.id.substr(1);
          this.servicio.casillas[posicionFinal].pieza.imagen = (this.servicio.casillas[posicionFinal].pieza.color == "white")? this.servicio.imagenQueenWhite:this.servicio.imagenQueenBlack;
        }
        this.serviciows.sendMessage(this.servicio.colorJugador+ev.dataTransfer.getData("posicion")+"-"+posicionFinal);
      }
      this.servicio.setTurno((this.servicio.colorJugador == "white")? "black":"white");
      this.servicio.actualizarAmenazadasBlack();
      this.servicio.actualizarAmenazadasWhite();
  }
    var casillas = this.servicio.casillas;
    casillas.forEach(element => {
      if(element.resaltar != "red-take"){
      element.resaltar = "null";
      }
    });

  }

  onDragOver(ev){
    ev.preventDefault();

  }
}
