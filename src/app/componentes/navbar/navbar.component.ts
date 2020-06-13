import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';
import { Usuario } from 'src/app/modelo/usuario';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser : Usuario;
  constructor(private servicio:RESTservicioService) { 

    this.currentUser = servicio.currentUser;
  }

  ngOnInit(): void {
  }

}
