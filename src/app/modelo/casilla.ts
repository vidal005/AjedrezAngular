import { Pieza } from './pieza';

export class Casilla {
    public pieza : Pieza;
    public posicionX : number;
    public posicionY : number;
    public posicion : number;
    constructor(pieza?){
        if(pieza != null){
            this.pieza = pieza;
         }
        }
}
