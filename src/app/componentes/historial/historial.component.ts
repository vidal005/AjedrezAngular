import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Partida } from 'src/app/modelo/partida';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  displayedColumns = ['id', 'jugadorBlancas', 'jugadorNegras', 'resultado'];
  public partidasUsuario :  Partida[] = []

  constructor(public servicioREST: RESTservicioService) { }

   async ngOnInit(): Promise<void> {

    let data : any = await this.servicioREST.getPartidasUsuario(this.servicioREST.currentUser.id);
    this.partidasUsuario = data;
  }
}
