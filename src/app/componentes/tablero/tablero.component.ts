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
      this.casillas = service.getCasillas();
  }

  ngOnInit(): void {
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 26 + Math.floor(index/8)*53;
      this.casillas[index].posicionX = 26 + (index%8)*53;
      this.casillas[index].posicion = index;
   }
  }
  onClickMe(posicion:number){
    //quitar seleccionados y sugeridos de otras casillas
    var seleccionados = document.getElementsByClassName("seleccionado");
    console.log(seleccionados);
    for (let index = 0; index < seleccionados.length; index++) {
      seleccionados[index].getElementsByTagName("img")[0].src = "https://assets.chess24.com/assets/804b8435ad5a94accc3de0729b3af3c1/images/chess/themes/pieces/chess24/highlight/null.png";
      seleccionados[index].classList.remove("seleccionado");
      console.log(seleccionados[index]);
    }
    var sugeridas = document.getElementsByClassName("sugerida");
    console.log(sugeridas);
    for (let index = 0; index < sugeridas.length; index++) {
      sugeridas[index].getElementsByTagName("img")[0].src = "https://assets.chess24.com/assets/804b8435ad5a94accc3de0729b3af3c1/images/chess/themes/pieces/chess24/highlight/null.png";
      sugeridas[index].classList.remove("sugerida");
      console.log(sugeridas[index]);
    }

    let img:any = event.target;
    img.parentElement.classList.add("seleccionado");
    let posiblesPosiciones = this.service.getPosiblesPosiciones(posicion);
    console.log(posiblesPosiciones);
    for (let index = 0; index < posiblesPosiciones.length; index++) {
      let div = document.getElementsByClassName("casilla "+"_"+posiblesPosiciones[index])[0];
      div.classList.add("sugerida");
      if(this.casillas[posiblesPosiciones[index]].pieza != null){
        div.getElementsByTagName("img")[0].src = "https://assets.chess24.com/assets/804b8435ad5a94accc3de0729b3af3c1/images/chess/themes/pieces/chess24/highlight/green-select.png";
      }
      else{
        div.getElementsByTagName("img")[0].src = "https://assets.chess24.com/assets/804b8435ad5a94accc3de0729b3af3c1/images/chess/themes/pieces/chess24/highlight/green.png";
      }
      img.parentElement.getElementsByTagName("img")[0].src = "https://assets.chess24.com/assets/804b8435ad5a94accc3de0729b3af3c1/images/chess/themes/pieces/chess24/highlight/green-select.png"
    }
    
    
  }
}
