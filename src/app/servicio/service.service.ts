import { Injectable } from '@angular/core';
import { Casilla } from '../modelo/casilla';
import { Pieza } from '../modelo/pieza';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public casillas: Casilla[];
  constructor() {
    this.casillas =
      [
        new Casilla(new Pieza("black", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
        new Casilla(new Pieza("black", "n", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png")),
        new Casilla(new Pieza("black", "b", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png")),
        new Casilla(new Pieza("black", "q", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/q.png")),
        new Casilla(new Pieza("black", "k", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/k.png")),
        new Casilla(new Pieza("black", "b", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png")),
        new Casilla(new Pieza("black", "n", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png")),
        new Casilla(new Pieza("black", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png")),
        new Casilla(new Pieza("black", "b", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png")),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(new Pieza("black", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
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
        new Casilla(new Pieza("black", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png")),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(new Pieza("white", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png")),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(),
        new Casilla(new Pieza("white", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png")),
        new Casilla(new Pieza("white", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "p", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png")),
        new Casilla(new Pieza("white", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png")),
        new Casilla(new Pieza("white", "n", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png")),
        new Casilla(new Pieza("white", "b", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(new Pieza("white", "q", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/q.png")),
        new Casilla(new Pieza("white", "k", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/k.png")),
        new Casilla(new Pieza("white", "b", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png")),
        new Casilla(new Pieza("white", "n", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png")),
        new Casilla(new Pieza("white", "r", "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png"))
      ];
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 25 + Math.floor(index / 8) * 53;
      this.casillas[index].posicionX = 25 + (index % 8) * 53;
      this.casillas[index].posicion = index;
    }
  }

  getPosiblesPosiciones(numero: number) {
    let casilla = this.casillas[numero];

    let posiblesPosiciones = [];

    //************************************************************************* */
    //peon
    if (casilla.pieza.id == "p") {
      if (casilla.pieza.color == "white") {
        var posicionesAEvaluar = [
          [-1, -1],
          [-1, 0],
          [-1, 1]
        ]
      }
      else {
        var posicionesAEvaluar = [
          [1, -1],
          [1, 0],
          [1, 1]
        ]
      }
      for (let index = 0; index < posicionesAEvaluar.length; index++) {
        //obtener la posicion absoluta a evaluar
        let posxy = this.getXY(casilla.posicion);
        posxy[0] = posxy[0] + posicionesAEvaluar[index][0];
        posxy[1] = posxy[1] + posicionesAEvaluar[index][1];
        let pos = this.getPosicion(posxy);

        //Comprobar que está dentro del tablero
        if (posxy[0] >= 0 && posxy[0] <= 7 && posxy[1] >= 0 && posxy[1] <= 7) {
          //si el moviento no es vertical
          if (posicionesAEvaluar[index][1] == 0) {
            if (this.casillas[pos].pieza == undefined) {
              posiblesPosiciones.push(pos);

            }
          }
          else if (this.casillas[pos].pieza == undefined) {
            //si es vertical una casilla
            if (posicionesAEvaluar[index][0] == 0) {
              if (this.casillas[casilla.posicion].pieza != undefined) {
                posiblesPosiciones.push(pos);
                if (casilla.pieza.color == "white") {
                  if (this.casillas[casilla.posicion - 16].pieza == undefined &&
                    this.getXY(this.casillas[casilla.posicion])[0] == 6) {
                    //posiblesPosiciones.push(casilla.posicion - 16);
                  }
                }
                else {
                  if (this.casillas[casilla.posicion + 16].pieza == undefined &&
                    this.getXY(this.casillas[casilla.posicion])[0] == 6) {
                    // posiblesPosiciones.push(casilla.posicion + 16);
                  }
                }
              }
            }
          }
        }
      }




    }
    //************************************************************************* */
    //alfil
    if (casilla.pieza.id == "b") {

      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //diagonal noroeste
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));
        console.log("noroeste" + this.getPosicion([pos[0] - 1, pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      }

      //diagonal suroeste
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      for (let index = 0; index < 7 && pos[0] >= 0 && pos[0] < 7 && pos[1] > 0 && pos[1] <= 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));
        console.log("suroeste" + this.getPosicion([pos[0] + 1, pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      }

      //diagonal noreste
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;

      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));
        console.log("noreste" + this.getPosicion([pos[0] - 1, pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;
      }

      //diagonal sureste

      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;

      for (let index = 0; index < 7 && pos[0] >= 0 && pos[0] < 7 && pos[1] >= 0 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));
        console.log("sureste " + this.getPosicion([pos[0] + 1, pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;
      }
    }
    //**************************************************************************/
    //Torre
    if (casilla.pieza.id == 'r') {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //arriba
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
      for (let index = 0; index < 7 && pos[0] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] ]));
        console.log("arriba" + this.getPosicion([pos[0] - 1, pos[1] ]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] ])].pieza;
      }

      //abajo
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] ])].pieza;
      for (let index = 0; index < 7 && pos[0] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] ]));
        console.log("abajo" + this.getPosicion([pos[0] + 1, pos[1] ]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
      }

      //derecha
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] , pos[1] + 1])].pieza;

      for (let index = 0; index < 7 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] , pos[1] + 1]));
        console.log("derecha" + this.getPosicion([pos[0] , pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] , pos[1] + 1])].pieza;
      }

      //izquierda
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] , pos[1] - 1])].pieza;

      for (let index = 0; index < 7 && pos[1] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] , pos[1] - 1]));
        console.log("izquierda" + this.getPosicion([pos[0] , pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza;
      }
    }

    //************************************************************************* */
    //Reina(alfil+torre)

    if (casilla.pieza.id == "q") {

      //Torre

      let pos = this.getXY(casilla.pieza.id);

      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza == null; index++) {
        pos[0] = pos[0] + 1;

        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
        //si es de otro color añadimos
        if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
          posiblesPosiciones.push(this.getPosicion(pos));
        }

      }

      pos = this.getXY(casilla.pieza.id);
      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza == null; index++) {
        pos[0] = pos[0] - 1;

        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
        //si es de otro color añadimos
        if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
          posiblesPosiciones.push(this.getPosicion(pos));
        }

      }

      pos = this.getXY(casilla.pieza.id);

      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza == null; index++) {
        pos[1] = pos[1] + 1;

        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza;
        //si es de otro color añadimos
        if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
          posiblesPosiciones.push(this.getPosicion(pos));
        }

      }

      pos = this.getXY(casilla.pieza.id);

      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza == null; index++) {
        pos[1] = pos[1] - 1;

        posiblesPosiciones.push(this.getPosicion(pos));

        //si encontramos una pieza
        let piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza;
        //si es de otro color añadimos
        if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
          posiblesPosiciones.push(this.getPosicion(pos));
        }

      }

      //alfil
      pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //diagonal noroeste
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] > 0 && pos[1] <= 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));
        console.log("noroeste" + this.getPosicion([pos[0] - 1, pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      }

      //diagonal suroeste
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      for (let index = 0; index < 7 && pos[0] >= 0 && pos[0] < 7 && pos[1] > 0 && pos[1] <= 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));
        console.log("suroeste" + this.getPosicion([pos[0] + 1, pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          console.log(piezaEncontrada);
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      }

      //diagonal noreste
      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;

      for (let index = 0; index < 7 && pos[0] > 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));
        console.log("noreste" + this.getPosicion([pos[0] - 1, pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;
      }

      //diagonal sureste

      pos = this.getXY(casilla.posicion);
      piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;

      for (let index = 0; index < 7 && pos[0] >= 0 && pos[0] < 7 && pos[1] >= 0 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));
        console.log("sureste " + this.getPosicion([pos[0] + 1, pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;
      }
    }
    //************************************************************************* */
    //Rey
    /*if(casilla.pieza.id=="k"){
      let pos = this.getXY(casilla.posicion);

      let posibles = [[1,1],[1,-1],[-1,1],[-1,-1]];
      //Comprobar que no hay pieza amiga en el posible sitio
      for (let index = 0; index < posibles.length; index++) {

        pos[0] = pos[0] + posibles[index][0];
        pos[1] = pos[1] + posibles[index][1];

        let pieza = this.casillas
        if (this.casillas[this.getPosicion()]) {
          
        }
        
      }
    }
*/

    //************************************************************************* */
    //Caballo
    if (casilla.pieza.id == "n") {

    }


    return posiblesPosiciones;
  }

  //X=nº de Fila
  //Y=nº de Columna
  getXY(posicion) {
    return [Math.floor(posicion / 8), posicion % 8];
  }

  //Posición en la matriz[64]
  getPosicion(XY: number[]) {
    return XY[0] * 8 + XY[1];
  }

}
