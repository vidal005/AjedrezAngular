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
  constructor(private service: ServiceService) {
    this.casillas = service.getCasillas();
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

 /* drop(ev : CdkDragDrop<string[]>){
    console.log("drop");
    console.log(ev.previousContainer);
    if (ev.previousContainer === ev.container) {
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);
    }
    console.log(this.casillas);
  }*/
}