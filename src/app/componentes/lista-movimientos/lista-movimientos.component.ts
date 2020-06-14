import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { ServiceService } from 'src/app/servicio/service.service';
import { Partida } from 'src/app/modelo/partida';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {

  public partida : Partida;
  constructor(public servicioRest:RESTservicioService, public servicoAjedrez:ServiceService) { }

  ngOnInit(): void {
  }

}
