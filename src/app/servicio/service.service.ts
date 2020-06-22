import { Injectable, Host } from "@angular/core";
import { Casilla } from "../modelo/casilla";
import { Pieza } from "../modelo/pieza";
import { of, Subject } from "rxjs";
import { element } from 'protractor';
import { Usuario } from '../modelo/usuario';
import { RESTservicioService } from './restservicio.service';
import { Partida } from '../modelo/partida';
import { Message } from '../modelo/message';
import { Room } from '../modelo/room';
import { Router } from '@angular/router';
import { WebSocketService } from './web-socket.service';
import { nextTick } from 'process';

@Injectable({
  providedIn: "root"
})
export class ServiceService {

  public jaqueMate = "";
  public partida: Partida = new Partida();
  public room: any = new Room();
  public casillas: Casilla[];
  public chat: Message[] = [];
  public jugador: Usuario;
  public colorJugador = 'ninguno';
  public turno: String = "white";
  public amenazadasBlack = new Set();
  public amenazadasWhite = new Set();

  public imagenQueenBlack = "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/q.png";
  public imagenQueenWhite = "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/q.png";
  jaque: string;

  constructor(public  restServicio: RESTservicioService, private router: Router) {
    this.casillas = this.getMatrizPartidaNueva();

    //Colocando las casillas en el tablero
    this.posicionarCasillasMatriz();

    this.jugador = restServicio.currentUser;
    this.partida = new Partida();
    this.partida.jugadorNegras = new Usuario();
    this.partida.jugadorBlancas = new Usuario();
  }


  posicionarCasillasMatriz(){
    for (let index = 0; index < this.casillas.length; index++) {
      this.casillas[index].posicionY = 25 + Math.floor(index / 8) * 66.3;
      this.casillas[index].posicionX = 25 + (index % 8) * 66.3;
      this.casillas[index].posicion = index;
    }
  }
 
 //Para llamar a un metodo de Marcador
  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  
  // Observable string streams, Componente Marcador subscrito a este observable
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  // Service message commands
  callComponentMethod() {
    this.componentMethodCallSource.next();
    
  }



  //Para llamar a un metodo de Partida
  // Observable string sources
  private partidaPauseSource= new Subject<any>();
  private partidaResumeSource= new Subject<any>();
  private partidaBeginSource= new Subject<any>();
  
  // Observable string streams, Componente Paritda subscrito a este observable
  PartidaMethodPauseTimer$ = this.partidaPauseSource.asObservable();
  PartidaMethodResumeTimer$ = this.partidaResumeSource.asObservable();
  PartidaMethodBeginTimer$ = this.partidaBeginSource.asObservable();

  // Service message commands
  callPartidaPauseTimer() {
    this.partidaPauseSource.next();
    
  }
  callPartidaResumeTimer() {
    this.partidaResumeSource.next();
    
  }
  callPartidaBeginTimer() {
    this.partidaBeginSource.next();
    
  }


getMatrizPartidaNueva(): Casilla[]{
  return  [
    new Casilla(
      new Pieza(
        "black",
        "r",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "n",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "b",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "q",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/q.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "k",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/k.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "b",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/b.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "n",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/n.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "r",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/r.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "black",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/black/p.png"
      )
    ),
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
    new Casilla(),
    new Casilla(),
    new Casilla(),
    new Casilla(),
    new Casilla(),
    new Casilla(),
    new Casilla(),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "p",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/p.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "r",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "n",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "b",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "q",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/q.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "k",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/k.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "b",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/b.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "n",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/n.png"
      )
    ),
    new Casilla(
      new Pieza(
        "white",
        "r",
        "https://assets.chess24.com/assets/7bd769e178450cc4d968a75890b87ed0/images/chess/themes/pieces/chess24/white/r.png"
      )
    )
  ]
}

finalizarPartida(){
  this.colorJugador = "ninguno";
          this.jugador.estado = "online";
          this.partida.jugadorBlancas.estado = "online";
          this.partida.jugadorNegras.estado = "online";
          
          this.restServicio.currentUser.estado = "online";
          this.restServicio.actualizarPartida(this.partida);
          this.restServicio.borrarRoom(this.room);
          this.room = new Room();
          this.partida = new Partida();
          this.partida.jugadorNegras = new Usuario();
          this.partida.jugadorBlancas = new Usuario();
          this.casillas = this.getMatrizPartidaNueva();
          this.posicionarCasillasMatriz();
          this.chat = [];
          this.turno = "white"; 
          sessionStorage.setItem('room',null);
          sessionStorage.setItem('usuario', JSON.stringify(this.jugador));
          this.restServicio.actualizarUsuario(this.jugador);
          
          this.router.navigateByUrl('/home/');
}


// Reaccionar a las comunicaciones recibidas
// mètodo traspasado a WebSocketservice
  /* async listenWSCom(body: string) {
    let com = JSON.parse(body)
    let data: any;
    //Si es un mensaje no enviado por nosotros
    if (com.id != this.jugador.id) {
      switch (com.message) {
        case 'rendirse': {

          alert(""+ com.nick + " se ha rendido, VICTORIA!");
          this.partida.resultado = (this.colorJugador == 'black')? this.partida.jugadorBlancas.nick: this.partida.jugadorNegras.nick;
          this.finalizarPartida();
          break;
        }

        case 'enterGame': {
          

          this.room = await this.restServicio.getRoom(JSON.parse(sessionStorage.getItem('room')).id);
          sessionStorage.setItem('room', JSON.stringify(this.room));
          this.partida = this.room.partida;
          this.callComponentMethod();
          alert(this.partida.jugadorNegras.nick + " entró a la partida.Comienza el juego!");
          break;
        }

        case 'tablas': {
          if(confirm(""+ com.nick + " ofrece tablas.Aceptar?")){
            this.room.partida.resultado = 'tablas';
            this.partida.resultado = 'tablas';
            alert("Partida empatada")
            this.finalizarPartida()
          }
          else{

          }
          break;
        }
      }
    }
  }*/

  getAmenazadasBlack() {
    return this.amenazadasBlack;
  }

  getAmenazadasWhite() {
    return this.amenazadasWhite;
  }
  getAmenazas(color: string) {
    if (color == "white") {
      return this.getAmenazadasBlack()
    }
    else if (color == "black") {
      return this.getAmenazadasWhite()
    }
    else return null
  }
  actualizarAmenazadasBlack() {
    //let movimientosPosibles = [];
    let ocupadasNegras = this.getCasillasOcupadas("black");
    let amenazadas = new Set();
    ocupadasNegras.forEach(ocupada => {
      this.getAmenazadasPieza(ocupada).forEach(amenazada => {
        amenazadas.add(amenazada)
      });
      
      
    });
    this.amenazadasBlack = amenazadas;

    let reyWhite = this.casillas.find(element => element.pieza != null && element.pieza.id.substr(0, 1) == "k" && element.pieza.color == "white");
    if (amenazadas.has(reyWhite) ) {
      this.casillas[reyWhite.posicion].resaltar = "red-take";
      this.jaque = 'white';
    }
    else {
      this.casillas[reyWhite.posicion].resaltar = "null";
    }
  }
  actualizarAmenazadasWhite() {
    //let movimientosPosibles = [];
    let ocupadasBlancas = this.getCasillasOcupadas("white");
    let amenazadas = new Set();
    ocupadasBlancas.forEach(ocupada => {
      this.getAmenazadasPieza(ocupada).forEach(amenazada => {
        amenazadas.add(amenazada)
      });
    
    });
    this.amenazadasWhite = amenazadas;
    let reyBlack = this.casillas.find(element => element.pieza != null && element.pieza.id.substr(0, 1) == "k" && element.pieza.color == "black");

    if (amenazadas.has(reyBlack)) {
      //if( movimientosPosibles.length == 0 ){
        //jaque al rey negro
       
        //this.jaqueMate = "white";
        //alert("Jaque Mate! Gana " + this.partida.jugadorBlancas.nick);
       // this.finalizarPartida();
      //}
      this.jaque = 'black';
      this.casillas[reyBlack.posicion].resaltar = "red-take";
    }
    else {
      this.casillas[reyBlack.posicion].resaltar = "null";
    }

  }

  comprobarJaqueMate(): boolean{
    if(this.jaque == 'white'){
      let posiblesMovimientos = 0;
      this.getCasillasOcupadas("white").forEach(casilla => {
       if(posiblesMovimientos == 0){
        posiblesMovimientos += (this.getPosiblesPosiciones(casilla.posicion)).length;
       }
      });

      if(posiblesMovimientos == 0){
        //jaque mate , gana Negro
        this.partida.resultado = this.partida.jugadorNegras.nick;
        alert("Jaque Mate! Gana " + this.partida.jugadorNegras.nick);
        this.finalizarPartida();
        return true;
      }
    }
    else if(this.jaque == 'black'){
      let posiblesMovimientos = 0;
      this.getCasillasOcupadas("black").forEach(casilla => {
       if(posiblesMovimientos == 0){
        posiblesMovimientos += (this.getPosiblesPosiciones(casilla.posicion)).length;
       }
      });

      if(posiblesMovimientos == 0){
        //jaque mate , gana Blanco
        this.partida.resultado = this.partida.jugadorBlancas.nick;
        alert("Jaque Mate! Gana " + this.partida.jugadorBlancas.nick);
        this.finalizarPartida();
        return true;
      }
      
    }
    return false;
  }

  getAmenazasRey(color: string) {

    if (color == "white") {

    }

  }

  getAmenazadasPieza(casilla: Casilla) {
    let posiciones = this.getPosicionesPosiblesSinMate(casilla.posicion)
    let amenazadas = new Set()
    posiciones.forEach(pos => {
      if (casilla.pieza.id == "p") {
        if (this.getXY(casilla.posicion)[1] != this.getXY(pos)[1]) {
          amenazadas.add(this.casillas[pos])
        }
      }
      else {
        amenazadas.add(this.casillas[pos])
      }
    });
    return amenazadas;
  }


  getCasillasOcupadas(color: string) {
    return this.casillas.filter(casilla => casilla.pieza != null && casilla.pieza.color == color);
  }

  getChat() {
    return this.chat;
  }

  getCasillas() {
    return this.casillas;
  }

  setJugador(jugador: Usuario) {
    this.jugador = jugador;
  }

  getTurno() {
    return this.turno;
  }

  setTurno(color: String) {
    this.turno = color;
  }

  hacerMovimiento(WSmessage: string) {
    let color = WSmessage.substr(0, 5);
    let iniPos = WSmessage.substr(5, WSmessage.indexOf("-") - 5);
    let finalPos = WSmessage.substr(WSmessage.indexOf("-") + 1);


    this.partida.movimientos += "" + iniPos+"-"+finalPos+',';
    if (color != this.colorJugador) {


      let pieza = this.casillas[iniPos].pieza;
      if (this.casillas[finalPos].pieza != null) {
        this.casillas[finalPos].pieza = null;
      }
      this.casillas[iniPos].pieza = null;
      this.casillas[finalPos].pieza = pieza;

      this.actualizarAmenazadasBlack()

      this.actualizarAmenazadasWhite()
      this.turno = this.colorJugador;
      
      this.callPartidaResumeTimer();
    }
  }



  getPosiblesPosiciones(numero: number) {
    let casilla = this.casillas[numero];

    let posiblesPosiciones: number[] = [];

    //**************************************************************************/
    //peon
    if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "p") {
      if (casilla.pieza.color == "white") {
        //casilla ariba
        let nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1]
        ];
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
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1] - 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1] + 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      } else if (casilla.pieza.color == "black") {
        //casilla abajo
        let nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1]
        ];
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
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1] - 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1] + 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }
    //************************************************************************* */
    //alfil
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "b") {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal suroeste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal noreste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal sureste

      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }
    //**************************************************************************/
    //Torre
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "r") {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }

        pos[0] = pos[0] + 1;

        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }

    //************************************************************************* */
    //Reina(alfil+torre)
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "q") {
      //Torre

      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //alfil
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal suroeste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal noreste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal sureste

      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }
    //************************************************************************* */
    //Rey
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "k") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0]
      ];
      //Comprobar que no hay pieza amiga en el posible sitio
      for (let index = 0; index < posibles.length; index++) {
        let nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        //si está dentro del tablero
        if (
          nuevaPosicion[0] >= 0 &&
          nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 &&
          nuevaPosicion[1] <= 7 &&
          !this.getAmenazas(casilla.pieza.color).has(this.casillas[this.getPosicion(nuevaPosicion)])
        ) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
          else if (
            this.casillas[this.getPosicion(nuevaPosicion)].pieza.color !=
            casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }

    //************************************************************************* */
    //Caballo
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "n") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2]
      ];

      for (let index = 0; index < posibles.length; index++) {
        var nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        if (
          nuevaPosicion[0] >= 0 &&
          nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 &&
          nuevaPosicion[1] <= 7
        ) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          } else if (
            this.casillas[this.getPosicion(nuevaPosicion)].pieza.color !=
            casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }

      }
    }

    //clonar pieza
    let pieza : any =  JSON.parse(JSON.stringify(casilla.pieza));
    let piezaComida : any = null;
    let posicionesMate = new Array();
    let reyBlack = this.casillas.find(c => c.pieza != null && c.pieza.id.substr(0, 1) == "k" && c.pieza.color == "black");
    let reyWhite = this.casillas.find(c => c.pieza != null && c.pieza.id.substr(0, 1) == "k" && c.pieza.color == "white");
    posiblesPosiciones.forEach(posicion => {
      piezaComida =  (this.casillas[posicion].pieza)?JSON.parse(JSON.stringify(this.casillas[posicion].pieza)): null;
      this.casillas[posicion].pieza = pieza;
      casilla.pieza = null;
      reyWhite = this.casillas.find(c => c.pieza != null && c.pieza.id.substr(0, 1) == "k" && c.pieza.color == "white");
      reyBlack = this.casillas.find(c => c.pieza != null && c.pieza.id.substr(0, 1) == "k" && c.pieza.color == "black");
      if (this.casillas[posicion].pieza.color == "white" ) {
        this.actualizarAmenazadasBlack();
        if (this.amenazadasBlack.has(reyWhite)) {
          posicionesMate.push(posicion);
        }
      }
      else if (this.casillas[posicion].pieza.color == "black") {
        this.actualizarAmenazadasWhite();
        if (this.amenazadasWhite.has(reyBlack)) {
          posicionesMate.push(posicion);
        }
      }
      casilla.pieza = this.casillas[posicion].pieza;
      this.casillas[posicion].pieza = piezaComida;
    });


    function clavado(pos) {
      if (posicionesMate.includes(pos)) {
        return false;
      }
      else {
        return true;
      }
    }

    /*if(posiblesPosiciones.filter(clavado).length == 0){
      if(this.colorJugador == 'black' && this.turno == 'black' && this.amenazadasWhite.has(reyBlack)){
        //jaque mate, gana white
        this.partida.resultado = this.partida.jugadorBlancas.nick;
        
      }
      else if(this.colorJugador == 'white' && this.turno ==  'white' && this.amenazadasBlack.has(reyWhite)){
        //jaque mate, gana black
        this.partida.resultado = this.partida.jugadorNegras.nick;
        
      }
    }*/

    return posiblesPosiciones.filter(clavado);
  }


  //obtener la posibles posiciones sin tener en cuenta la defensa del jaque
  getPosicionesPosiblesSinMate(numero: number) {
    let casilla = this.casillas[numero];

    let posiblesPosiciones: number[] = [];

    //**************************************************************************/
    //peon
    if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "p") {
      if (casilla.pieza.color == "white") {
        //casilla ariba
        let nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1]
        ];
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
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1] - 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] - 1,
          this.getXY(casilla.posicion)[1] + 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] >= 0 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      } else if (casilla.pieza.color == "black") {
        //casilla abajo
        let nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1]
        ];
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
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1] - 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] >= 0) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
        //diagonal derecha
        nuevaPosicion = [
          this.getXY(casilla.posicion)[0] + 1,
          this.getXY(casilla.posicion)[1] + 1
        ];
        //si está dentro del tablero
        if (nuevaPosicion[0] <= 7 && nuevaPosicion[1] <= 7) {
          let piezaEncontrada = this.casillas[this.getPosicion(nuevaPosicion)]
            .pieza;
          if (
            piezaEncontrada != null &&
            piezaEncontrada.color != casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }
    //************************************************************************* */
    //alfil
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "b") {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      //diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal suroeste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal noreste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //diagonal sureste

      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }
    //**************************************************************************/
    //Torre
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "r") {
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }

        pos[0] = pos[0] + 1;

        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }

    //************************************************************************* */
    //Reina(alfil+torre)
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "q") {
      //Torre

      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////arriba
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] - 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////abajo
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0] + 1, pos[1]])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1]]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1]])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1]])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////derecha
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] + 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] + 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////izquierda
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
        piezaEncontrada = this.casillas[this.getPosicion([pos[0], pos[1] - 1])]
          .pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[1] > 0 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0], pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0], pos[1] - 1])]) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0], pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      //alfil
      var pos = this.getXY(casilla.posicion);
      var piezaEncontrada;

      ////diagonal noroeste
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }
      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal suroeste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] - 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] > 0 &&
        pos[1] <= 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] - 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] - 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] - 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] - 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal noreste
      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] - 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] > 0 &&
        pos[0] <= 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] - 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] - 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] - 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] - 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }

      ////diagonal sureste

      pos = this.getXY(casilla.posicion);
      if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
        piezaEncontrada = this.casillas[
          this.getPosicion([pos[0] + 1, pos[1] + 1])
        ].pieza;
      } else {
        piezaEncontrada = null;
      }

      for (
        let index = 0;
        index < 7 &&
        pos[0] >= 0 &&
        pos[0] < 7 &&
        pos[1] >= 0 &&
        pos[1] < 7 &&
        (piezaEncontrada == null ||
          piezaEncontrada.color != casilla.pieza.color);
        index++
      ) {
        posiblesPosiciones.push(this.getPosicion([pos[0] + 1, pos[1] + 1]));

        if (piezaEncontrada != null) {
          //finalizar loop
          index = 8;
        }
        pos[0] = pos[0] + 1;
        pos[1] = pos[1] + 1;
        if (this.casillas[this.getPosicion([pos[0] + 1, pos[1] + 1])] != null) {
          piezaEncontrada = this.casillas[
            this.getPosicion([pos[0] + 1, pos[1] + 1])
          ].pieza;
        } else {
          piezaEncontrada = null;
        }
      }
    }
    //************************************************************************* */
    //Rey
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "k") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0]
      ];
      //Comprobar que no hay pieza amiga en el posible sitio
      for (let index = 0; index < posibles.length; index++) {
        let nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        //si está dentro del tablero
        if (
          nuevaPosicion[0] >= 0 &&
          nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 &&
          nuevaPosicion[1] <= 7 &&
          !this.getAmenazas(casilla.pieza.color).has(this.casillas[this.getPosicion(nuevaPosicion)])
        ) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
          else if (
            this.casillas[this.getPosicion(nuevaPosicion)].pieza.color !=
            casilla.pieza.color) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
      }
    }

    //************************************************************************* */
    //Caballo
    else if (casilla.pieza != null && casilla.pieza.id.substr(0, 1) == "n") {
      let pos = this.getXY(casilla.posicion);
      let posibles = [
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2]
      ];

      for (let index = 0; index < posibles.length; index++) {
        var nuevaPosicion = [];
        nuevaPosicion[0] = pos[0] + posibles[index][0];
        nuevaPosicion[1] = pos[1] + posibles[index][1];

        if (
          nuevaPosicion[0] >= 0 &&
          nuevaPosicion[0] <= 7 &&
          nuevaPosicion[1] >= 0 &&
          nuevaPosicion[1] <= 7
        ) {
          if (this.casillas[this.getPosicion(nuevaPosicion)].pieza == null) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          } else if (
            this.casillas[this.getPosicion(nuevaPosicion)].pieza.color !=
            casilla.pieza.color
          ) {
            posiblesPosiciones.push(this.getPosicion(nuevaPosicion));
          }
        }
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


  //[0,0] -> a0
  //[0,1] ->
  XYtoNLetra(xy: number[]) {
    switch (xy[1]) {
      case 0:
        return "a" + (8 - xy[0]);
        break;
      case 1:
        return "b" + (8 - xy[0]);
        break;
      case 2:
        return "c" + (8 - xy[0]);
        break;
      case 3:
        return "d" + (8 - xy[0]);
        break;
      case 4:
        return "e" + (8 - xy[0]);
        break;
      case 5:
        return "f" + (8 - xy[0]);
        break;
      case 6:
        return "g" + (8 - xy[0]);
        break;
      case 7:
        return "h" + (8 - xy[0]);
        break;
      default:
        break;
    }
  }
}
