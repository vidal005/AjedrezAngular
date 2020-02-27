import { Pieza } from './pieza';

export class Casilla {
    public pieza : Pieza;
    public posicionX : number;
    public posicionY : number;
    constructor(pieza?){
        if(pieza != null){
            this.pieza = pieza;
         }
        }
}
