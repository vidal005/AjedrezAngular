import { Component, OnInit, Input, ElementRef } from '@angular/core';
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
  public offSTop = 18;
  public colorJugador : String = "ninguno";
  public turno : String = this.service.turno;
  constructor(public service: ServiceService,private elRef:ElementRef) {
    this.casillas = service.getCasillas();
    this.colorJugador = this.service.colorJugador;
  }
  setColorJugador(color : string ){
    this.service.colorJugador = color;
    this.colorJugador = color;
    console.log(color);
  }

  onResize(event) {
    
    const isIEOrEdge = /msie\s|trident\/|edge\/|firefox\//i.test(window.navigator.userAgent)

    if(isIEOrEdge){
       this.offSTop = 18 + 15;
    }
    

    /*for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = this.elRef.nativeElement.offsetTop + this.offSTop +  Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = this.elRef.nativeElement.offsetLeft + 18 + (index % 8) * 53;
    }*/
  }

  public onClickWindow(ev){
   /* for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = this.elRef.nativeElement.offsetTop + this.offSTop +  Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = this.elRef.nativeElement.offsetLeft + 18 + (index % 8) * 53;
    }*/
  }

  ngOnInit(): void {

    const isIEOrEdge = /msie\s|trident\/|edge\/|firefox\//i.test(window.navigator.userAgent)

    if(isIEOrEdge){
       this.offSTop = 18 + 15;
    }

    /*for (let index = 0; index < this.casillas.length; index++) {
      //this.casillas[index].posicionY = this.elRef.nativeElement.offsetTop + this.offSTop +  Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = this.elRef.nativeElement.offsetLeft + 18 + (index % 8) * 53;
    }*/
   
  }

  ngAfterViewInit(){
    /*const isIEOrEdge = /msie\s|trident\/|edge\/|firefox\//i.test(window.navigator.userAgent)

    if(isIEOrEdge){
       this.offSTop = 18 + 15;
    }

    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = this.elRef.nativeElement.offsetTop + this.offSTop +  Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = this.elRef.nativeElement.offsetLeft + 18 + (index % 8) * 53;
    }*/
  }
}