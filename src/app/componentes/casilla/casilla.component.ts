import { Component, OnInit, Input } from '@angular/core';
import { Casilla } from 'src/app/modelo/casilla';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.css']
})
export class CasillaComponent implements OnInit {

  @Input() casilla:Casilla;
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(posicion:number){

  }
}
