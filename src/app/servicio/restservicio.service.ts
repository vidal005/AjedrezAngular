import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Partida } from '../modelo/partida';
import { Room } from '../modelo/room';

@Injectable({
  providedIn: 'root'
})
export class RESTservicioService {


  crearPartida(partida : Partida) {
      let room = new Room();
      room.partida = partida;
    return this.http.post('http://localhost:8082/ajedrez/addRoom', room,{headers : {'Access-Control-Allow-Origin': '*'}})
  }
  
  public postId: string;
  public currentUser: Usuario;

  constructor(public http: HttpClient) { }

  register(user: Usuario) {
    return this.http.post('http://localhost:8082/ajedrez/addUsuario', user,{headers : {'Access-Control-Allow-Origin': '*'}})
  }

  login(user: String, password :String){
    return this.http.post('http://localhost:8082/ajedrez/login', {nick: user, password : password, estado: 'Online'},{headers : {'Access-Control-Allow-Origin': '*'}})
  }


  getUsuariosOnline() {
    return this.http.get('http://localhost:8082/ajedrez/usuariosOnline')  
  }

  getPartidasOnline() {
    return this.http.get('http://localhost:8082/ajedrez/partidasOnline')
  }

}
