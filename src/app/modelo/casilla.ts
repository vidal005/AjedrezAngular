import { Pieza } from './pieza';

export class Casilla {
    public pieza : Pieza;
    public posicionX : number;
    public posicionY : number;
    public posicion : number;
    public resaltar : string;
    constructor(pieza?){
        if(pieza != null){
            this.pieza = pieza;
         }
         this.resaltar = "null";
        }
}
