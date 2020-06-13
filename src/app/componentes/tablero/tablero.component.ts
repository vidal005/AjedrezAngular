import { Component, OnInit, Input } from '@angular/core';
import { Casilla } from 'src/app/modelo/casilla';
import { Pieza } from 'src/app/modelo/pieza';
import { ServiceService } from 'src/app/servicio/service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  public casillas: Casilla[];
  public colorJugador : String = "ninguno";
  public turno : String = this.service.turno;
  constructor(public service: ServiceService) {
    this.casillas = service.getCasillas();
  }
  setColorJugador(color : string ){
    this.service.colorJugador = color;
    this.colorJugador = color;
    console.log(color);
  }

  ngOnInit(): void {
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 26 + Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = 26 + (index % 8) * 53;
      this.casillas[index].posicion = index;
      if(this.casillas[index].pieza != null){
        this.casillas[index].pieza.id += index;
      }
    }
  }
}