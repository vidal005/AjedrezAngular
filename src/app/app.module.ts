import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { PiezaComponent } from './componentes/pieza/pieza.component';

import { DragDropModule} from '@angular/cdk/drag-drop';
import { CasillaComponent } from './componentes/casilla/casilla.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    PiezaComponent,
    CasillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
