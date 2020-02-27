import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { PiezaComponent } from './componentes/pieza/pieza.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    PiezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
