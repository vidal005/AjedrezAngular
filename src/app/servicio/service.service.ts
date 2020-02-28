import { Injectable } from '@angular/core';
import { Casilla } from '../modelo/casilla';
import { Pieza } from '../modelo/pieza';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public casillas : Casilla[];
  constructor() {
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
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 25 + Math.floor(index/8)*53;
      this.casillas[index].posicionX = 25 + (index%8)*53;
      this.casillas[index].posicion = index;
   }
   }

  getPosiblesPosiciones(numero : number){
    let casilla = this.casillas[numero];
    
    let posiblesPosiciones = [];

    //peon
    if (casilla.pieza.id  == "p") {
        if (casilla.pieza.color == "white") {
          var posicionesAEvaluar = [
            [-1,-1],
            [-1,0],
            [-1,1]
          ]
        }
        else{
          var posicionesAEvaluar = [
            [1,-1],
            [1,0],
            [1,1]
          ]
        }
          for (let index = 0; index < posicionesAEvaluar.length; index++) {        
            //obtener la posicion absoluta a evaluar
            let posxy = this.getXY(casilla.posicion);
            posxy[0] = posxy[0] + posicionesAEvaluar[index][0];
            posxy[1] = posxy[1] + posicionesAEvaluar[index][1];
            let pos =this.getPosicion(posxy);

            //Comprobar que está dentro del tablero
          if (posxy[0] >= 0 && posxy[0]<=7 && posxy[1] >= 0 && posxy[1] <=7) {
              //si el moviento no es vertical
              if(posicionesAEvaluar[index][1] == 0){
                if(this.casillas[pos].pieza == undefined){
                  posiblesPosiciones.push(pos);
                  
                }
              }
              else if (this.casillas[pos].pieza == undefined){
                //si es vertical una casilla
                if (posicionesAEvaluar[index][0] == 0){
                 if(this.casillas[casilla.posicion].pieza != undefined){
                  posiblesPosiciones.push(pos);
                  if (casilla.pieza.color == "white") {
                    if(this.casillas[casilla.posicion - 16].pieza == undefined &&
                      this.getXY(this.casillas[casilla.posicion])[0] == 6 ){
                        //posiblesPosiciones.push(casilla.posicion - 16);
                      }
                  }
                  else  {
                    if(this.casillas[casilla.posicion + 16].pieza == undefined &&
                      this.getXY(this.casillas[casilla.posicion])[0] == 6 ){
                       // posiblesPosiciones.push(casilla.posicion + 16);
                      }
                  }
                 }
                }
              }
            }
          }


      
      
    }

    //alfil
    if(casilla.pieza.id == "b"){
        
      var pos = this.getXY(casilla.posicion);
      
      for (let index = 0; index < 7 && pos[0]>0&&pos[0]<=7&&pos[1]>0&&pos[1]<=7&&
        this.casillas[this.getPosicion([pos[0]-1,pos[1]-1])].pieza == null; index++) {
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0]-1,pos[1]-1])].pieza;
        if(piezaEncontrada!= null && piezaEncontrada.color != casilla.pieza.color){
        posiblesPosiciones.push(this.getPosicion(pos));
        }
      }

      pos = this.getXY(casilla.posicion);
      
      for (let index = 0; index < 7 && pos[0]>0&&pos[0]<=7&&pos[1]>0&&pos[1]<=7&&
        this.casillas[this.getPosicion([pos[0]+1,pos[1]-1])].pieza == null; index++) {
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        posiblesPosiciones.push(this.getPosicion(pos));
        
        //si enocontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0]-1,pos[1]-1])].pieza;
        if(piezaEncontrada!= null && piezaEncontrada.color != casilla.pieza.color){
        posiblesPosiciones.push(this.getPosicion(pos));
        }
      }

      pos = this.getXY(casilla.posicion);
      
      for (let index = 0; index < 7 && pos[0]>0&&pos[0]<=7&&pos[1]>0&&pos[1]<=7&&
        this.casillas[this.getPosicion([pos[0]-1,pos[1]+1])].pieza == null; index++) {
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        posiblesPosiciones.push(this.getPosicion(pos));
        
        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0]-1,pos[1]-1])].pieza;
        if(piezaEncontrada!= null && piezaEncontrada.color != casilla.pieza.color){
        posiblesPosiciones.push(this.getPosicion(pos));
        }
      }

      pos = this.getXY(casilla.posicion);
      
      for (let index = 0; index < 7 && pos[0]>0&&pos[0]<=7&&pos[1]>0&&pos[1]<=7&&
        this.casillas[this.getPosicion([pos[0]+1,pos[1]+1])].pieza == null; index++) {
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0]-1,pos[1]-1])].pieza;
        if(piezaEncontrada!= null && piezaEncontrada.color != casilla.pieza.color){
        posiblesPosiciones.push(this.getPosicion(pos));
        }
      }
      
      
    }
    return posiblesPosiciones;
  }

  getXY(posicion){
    return [Math.floor(posicion/8),posicion%8];
  }

  getPosicion(XY : number[]){
    return XY[0]*8+XY[1];
  }

}
