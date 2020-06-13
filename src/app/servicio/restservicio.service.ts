import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class RESTservicioService {
  
  
  postId: string;
  currentUser: Usuario;

  constructor(private http: HttpClient) { }

  register(user: Usuario) {
    return this.http.post('http://localhost:8082/ajedrez/addUsuario', user,{headers : {'Access-Control-Allow-Origin': '*'}})
  }

  login(user: String, password :String){
    return this.http.post('http://localhost:8082/ajedrez/login', {nick: user, password : password, estado: 'Online'},{headers : {'Access-Control-Allow-Origin': '*'}})
  }

}
