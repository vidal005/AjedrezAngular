import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Partida } from '../modelo/partida';
import { Room } from '../modelo/room';

@Injectable({
  providedIn: 'root'
})
export class RESTservicioService {

  constructor(public http: HttpClient) {

    this.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
  }

  async actualizarPartida(partida: Partida) {
    return this.http.post('http://localhost:8082/ajedrez/actualizarPartida', partida).toPromise();
  }
  async actualizarUsuario(u: Usuario) {
    return this.http.post('http://localhost:8082/ajedrez/actualizarUsuario', u).toPromise();
  }


  async entrarRoom(idRoom: Number) {
    return this.http.get('http://localhost:8082/ajedrez/entrarRoom', {
      params: {
        idRoom: idRoom.toString(),
        idUsuario: this.currentUser.id
      }
    }).toPromise();
  }


  async getRoom(id: any) {
    return this.http.get('http://localhost:8082/ajedrez/getRoom/' + id).toPromise();
  }


  public postId: string;
  public currentUser: Usuario;



  register(user: Usuario) {
    return this.http.post('http://localhost:8082/ajedrez/addUsuario', user, { headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  login(user: String, password: String) {
    return this.http.post('http://localhost:8082/ajedrez/login', { nick: user, password: password, estado: 'Online' }, { headers: { 'Access-Control-Allow-Origin': '*' } })
  }


  getUsuariosOnline() {
    return this.http.get('http://localhost:8082/ajedrez/usuariosOnline')
  }

  getPartidasOnline() {
    return this.http.get('http://localhost:8082/ajedrez/partidasOnline')
  }

  async getRooms() {
    return this.http.get('http://localhost:8082/ajedrez/getRooms').toPromise()
  }

  async crearPartida(partida: Partida) {
    return this.http.post('http://localhost:8082/ajedrez/addPartida', partida, { headers: { 'Access-Control-Allow-Origin': '*' } }).toPromise()
  }

  async crearRoom(partida: Partida) {

    return this.http.post('http://localhost:8082/ajedrez/addRoom', partida, { headers: { 'Access-Control-Allow-Origin': '*' } }).toPromise()
  }


}
