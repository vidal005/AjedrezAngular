import { Component, OnInit } from '@angular/core';
import { Casilla } from 'src/app/modelo/casilla';
import { Pieza } from 'src/app/modelo/pieza';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

    public casillas : Casilla[];
    constructor(private service:ServiceService) { 

    this.casillas = 
    [
        new Casilla(new Pieza("black","r","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
        new Casilla(new Pieza("black","n","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png")),
        new Casilla(new Pieza("black","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png")),
        new Casilla(new Pieza("black","q","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/q.png")),
        new Casilla(new Pieza("black","k","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/k.png")),
        new Casilla(new Pieza("black","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png")),
        new Casilla(new Pieza("black","n","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png")),
        new Casilla(new Pieza("black","r","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(new Pieza("white","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(new Pieza("white","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","p","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white","r","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png")),
        new Casilla(new Pieza("white","n","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png")),
        new Casilla(new Pieza("white","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(new Pieza("white","q","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/q.png")),
        new Casilla(new Pieza("white","k","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/k.png")),
        new Casilla(new Pieza("white","b","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(new Pieza("white","n","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png")),
        new Casilla(new Pieza("white","r","https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png"))
    ];

    
  }

  ngOnInit(): void {
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 25 + Math.floor(index/8)*53;
      this.casillas[index].posicionX = 25 + (index%8)*53;
      this.casillas[index].posicion = index;
   }
  }
  onClickMe(){
    let img:any = event.target;
    console.log(img.parentElement);
    //this.service.getPosiblesPosiciones(img.parentElement.index);
    console.log(this.service.getPosiblesPosiciones(img.parentElement.id));
  }
}
