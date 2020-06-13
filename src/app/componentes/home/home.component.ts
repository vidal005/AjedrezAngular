import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Usuario;
    users = [];

    constructor(
        
        private userService: RESTservicioService
    ) {
        this.currentUser = this.userService.currentUser;
    }

    ngOnInit() {
        
    }

}
