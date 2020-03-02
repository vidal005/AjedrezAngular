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

  getCasillas() {
    return this.casillas;
  }

  getPosiblesPosiciones(numero: number) {
    let casilla = this.casillas[numero];

    let posiblesPosiciones = [];

    //**************************************************************************/
    //peon
    if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == "p") {
      if (casilla.pieza.color == "white") {
        //casilla ariba
        let nuevaPosicion = [this.getXY(casilla.posicion)[0] - 1, this.getXY(casilla.posicion)[1]];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0) {
          //si no hay pieza casilla arriba
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
            //si el peón está en la segunda línea
            if (this.getXY(casilla.posicion)[0] == 6) {
              //si no hay pieza dos casillas arriba
              if (this.casillas[casilla.posicion - 16].pieza == null) {
                posiblesPosiciones.push(casilla.posicion - 16);
              }
            }
          }
        }
        //diagonal izquierda
        nuevaPosicion = [this.getXY(casilla.posicion)[0] - 1, this.getXY(casilla.posicion)[1] - 1];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)].pieza;
          if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [this.getXY(casilla.posicion)[0] - 1, this.getXY(casilla.posicion)[1] + 1];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)].pieza;
          if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
      else if (casilla.pieza.color == "black") {
        //casilla abajo
        let nuevaPosicion = [this.getXY(casilla.posicion)[0] + 1, this.getXY(casilla.posicion)[1]];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7) {
          //si no hay pieza casilla abajo
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
            //si el peón está en la segunda línea
            if (this.getXY(casilla.posicion)[0] == 1) {
              //si no hay pieza dos casillas abajo
              if (this.casillas[casilla.posicion + 16].pieza == null) {
                posiblesPosiciones.push(casilla.posicion + 16);
              }
            }
          }
        }
        //diagonal izquierda
        nuevaPosicion = [this.getXY(casilla.posicion)[0] + 1, this.getXY(casilla.posicion)[1] - 1];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)].pieza;
          if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [this.getXY(casilla.posicion)[0] + 1, this.getXY(casilla.posicion)[1] + 1];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)].pieza;
          if (piezaEncontrada != null && piezaEncontrada.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }
    //************************************************************************* */
    //alfil
    else if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == "b") {

      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }
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
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

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
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

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
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }


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
    else if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == 'r') {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

      for (let index = 0; index < 7 && pos[0] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));
        console.log("arriba" + this.getPosicion([pos[0] - 1, pos[1]]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
      }
      else {
        piezaEncontrada = null;
      }
      for (let index = 0; index < 7 && pos[0] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));
        console.log("abajo" + this.getPosicion([pos[0] + 1, pos[1]]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }


      for (let index = 0; index < 7 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));
        console.log("derecha" + this.getPosicion([pos[0], pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza;
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

      for (let index = 0; index < 7 && pos[1] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));
        console.log("izquierda" + this.getPosicion([pos[0], pos[1] - 1]));
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

    else if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == "q") {

      //Torre

      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

      for (let index = 0; index < 7 && pos[0] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));
        console.log("arriba" + this.getPosicion([pos[0] - 1, pos[1]]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])].pieza;
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

      for (let index = 0; index < 7 && pos[0] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {

        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));
        console.log("abajo" + this.getPosicion([pos[0] + 1, pos[1]]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])].pieza;
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }


      for (let index = 0; index < 7 && pos[1] < 7 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));
        console.log("derecha" + this.getPosicion([pos[0], pos[1] + 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])].pieza;
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

      for (let index = 0; index < 7 && pos[1] > 0 &&
        (piezaEncontrada == null || piezaEncontrada.color != casilla.pieza.color); index++) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));
        console.log("izquierda" + this.getPosicion([pos[0], pos[1] - 1]));
        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])].pieza;
      }


      //alfil
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }
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

      ////diagonal suroeste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

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

      ////diagonal noreste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }

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

      ////diagonal sureste

      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])].pieza;
      }
      else {
        piezaEncontrada = null;
      }


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
    else if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == "k") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
      //Comprobar que no hay pieza amiga en el posible sitio
      for (let index = 0; index < posibles.length; index++) {
        let nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 && nuevaPosicion[1] <= 7) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
          else if (this.casillas[this.getPosicion(nuevaPosicion)].pieza.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }

    //************************************************************************* */
    //Caballo
    else if (casilla.pieza != null && casilla.pieza.id.substr(0,1) == "n") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [[-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2]];

      for (let index = 0; index < posibles.length; index++) {
        var nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        if (nuevaPosicion[0] >= 0 && nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 && nuevaPosicion[1] <= 7) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
          else if (this.casillas[this.getPosicion(nuevaPosicion)].pieza.color != casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        console.log(posiblesPosiciones);
      }
    }
    
    return posiblesPosiciones;
  }

  //X=nº de Fila
  //Y=nº de Columna
  //Siendo (0,0) la esquina superior izquierda
  getXY(posicion) {
    return [Math.floor(posicion / 8), posicion % 8];
  }

  //Posición en la matriz[64]
  getPosicion(XY: number[]) {
    return XY[0] * 8 + XY[1];
  }

}
