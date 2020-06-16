import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Usuario } from 'src/app/modelo/usuario';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser : Usuario;
  constructor(public servicio:RESTservicioService, private router: Router, public  servicioAjedrez :ServiceService) { 
    this.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
  }

  ngOnInit(): void {
  }

  public async cerrarSesion(){
      let u : Usuario = JSON.parse(sessionStorage.getItem('usuario'));
      u.estado = 'offLine';
      await this.servicio.actualizarUsuario(u);
      sessionStorage.setItem('usuario', null);
      sessionStorage.setItem('room', null);
     // this.servicioAjedrez = new ServiceService(this.servicio);
      this.router.navigateByUrl('/login');
  }

}
