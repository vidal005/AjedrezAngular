import { Usuario } from './usuario';

export class Partida {

    public jugadorBlancas : Usuario;
    public jugadorNegras : Usuario;
    public resultado : String;
    public movimientos : Array<String>;
}
