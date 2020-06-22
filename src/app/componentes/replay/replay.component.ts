import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Partida } from 'src/app/modelo/partida';
import { ServiceService } from 'src/app/servicio/service.service';
import { Pieza } from 'src/app/modelo/pieza';
import { Movimiento } from 'src/app/modelo/movimiento';
import { Casilla } from 'src/app/modelo/casilla';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {
  partida: Partida;
  moves : Movimiento[] = [];
  numMovimientoActual : number = -1;
  movimientosCargados: boolean = false;
  casillasReplay: Casilla[];

  constructor(private router:RouterModule,  private servicioREST:RESTservicioService,private ruta:ActivatedRoute
    , private servicioAjedrez : ServiceService, private cd :ChangeDetectorRef) {
    

      this.servicioAjedrez.casillas = this.servicioAjedrez.getMatrizPartidaNueva();
      this.servicioAjedrez.posicionarCasillasMatriz();
      this.casillasReplay = this.servicioAjedrez.getMatrizPartidaNueva();

  
   }


   
  async ngOnInit()  {

    //reproducir la partida para guardar los movimientos
    this.partida =  await this.servicioREST.getPartida(this.ruta.snapshot.params.id);
    this.servicioAjedrez.partida = this.partida;

    //movimientos => ["","","",,,,]
    //movimientos =>[[posIni,posFnal],[posIni,posFnal],[posIni,posFnal],[posIni,posFnal],[posIni,posFnal],[posIni,posFnal],,,]
    //movimientos => [(e5, [45,48]),(e5, [45,48]),(e5, [45,48]),(e5, [45,48]),,,]
     
      let movimientosPartida =  this.partida.movimientos.split(",").map(move => this.moveToNumber(move) )

    

     for (let index = 0; index < movimientosPartida.length - 1; index++) {
      let m = new Movimiento();
      m.piezaMovida = this.casillasReplay[movimientosPartida[index][0]].pieza;
      m.piezaComida = this.casillasReplay[movimientosPartida[index][1]].pieza;
      this.casillasReplay[movimientosPartida[index][1]].pieza = this.casillasReplay[movimientosPartida[index][0]].pieza;
      this.casillasReplay[movimientosPartida[index][0]].pieza = null;
      
      m.numero = index;
      m.casilla = this.casillasReplay[movimientosPartida[index][1]].pieza.id.substr(0,1) + this.servicioAjedrez.XYtoNLetra(this.servicioAjedrez.getXY(movimientosPartida[index][1]));
      m.posFin = movimientosPartida[index][1];
      m.posIni = movimientosPartida[index][0];
      m.color = this.casillasReplay[m.posFin].pieza?.color;
      
      this.moves.push(m);
     }

     
    // this.servicioAjedrez.casillas = this.servicioAjedrez.getMatrizPartidaNueva();
     //this.servicioAjedrez.posicionarCasillasMatriz();
     if(!this.movimientosCargados){
      this.detectarCambios();
     }
     
  }
  //54-45 ->  [54,45]
  moveToNumber(move :String):number[]{
    return move.split("-").map(move => +move)
  }
  
  irAMovimiento(moveFin: number, movIni : number = this.numMovimientoActual ){
    var _i = movIni;


   /* do {
      if(moveFin>movIni){
        this.servicioAjedrez.casillas[this.moves[_i].posFin].pieza = this.moves[_i].piezaMovida ;
        this.servicioAjedrez.casillas[this.moves[_i].posIni].pieza = null;
        _i ++;
      }
      else{
        this.servicioAjedrez.casillas[this.moves[_i].posIni].pieza = this.servicioAjedrez.casillas[this.moves[_i].posFin].pieza;
        this.servicioAjedrez.casillas[this.moves[_i].posFin].pieza = this.moves[_i].piezaComida;
        _i --;
      }
      
    } while (_i != moveFin);*/

   for (var _i : number = movIni ; _i != moveFin ;(movIni<moveFin)? (_i++):(_i--)) {
    
      if(moveFin>movIni){
        var i = _i +1; 
        this.servicioAjedrez.casillas[this.moves[i].posFin].pieza = this.moves[i].piezaMovida ;
        this.servicioAjedrez.casillas[this.moves[i].posIni].pieza = null;
      }
      else{
        var i = _i ; 
        this.servicioAjedrez.casillas[this.moves[i].posIni].pieza = this.servicioAjedrez.casillas[this.moves[i].posFin].pieza;
        this.servicioAjedrez.casillas[this.moves[i].posFin].pieza = this.moves[i].piezaComida;
      }
    }
    this.numMovimientoActual = moveFin;

    this.detectarCambios();
  }


  
 /* almacenarPiezasComidas(){
    for (var _i = 0; _i >= this.movimientos.length ; _i++) {
      if (this.servicioAjedrez.casillas[this.movimientos[_i][1]].pieza){
        this.piezasComidas.set(_i,this.servicioAjedrez.casillas[this.movimientos[_i][1]].pieza);
      }
    }
  }
*/

detectarCambios() {
  
  this.cd.detectChanges();
  
}
}
