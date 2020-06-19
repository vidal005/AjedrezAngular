import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Router } from '@angular/router';
import { WebSocketService } from 'src/app/servicio/web-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Usuario;
    users = [];

    constructor(
        public userService: RESTservicioService,private router: Router,private servicioWS : WebSocketService
    ) {
        this.currentUser = JSON.parse(sessionStorage.getItem('usuario'));
        this.servicioWS.desconectarServicios();
    }

    ngOnInit() {
      
      
        if(this.currentUser == null){
          this.router.navigateByUrl('/login');
        }
    }

}
