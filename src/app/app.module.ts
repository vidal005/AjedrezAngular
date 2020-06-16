import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { PiezaComponent } from './componentes/pieza/pieza.component';

import { DragDropModule} from '@angular/cdk/drag-drop';
import { CasillaComponent } from './componentes/casilla/casilla.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { ListaMovimientosComponent } from './componentes/lista-movimientos/lista-movimientos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './componentes/alert/alert.component';

import{FormGroup,FormBuilder,Validators,FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './componentes/register/register.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LobbyComponent } from './componentes/lobby/lobby.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PartidaComponent } from './componentes/partida/partida.component';
import { MarcadorComponent } from './componentes/marcador/marcador.component';


@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    PiezaComponent,
    CasillaComponent,
    ChatComponent,
    ListaMovimientosComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    NavbarComponent,
    LobbyComponent,
    PerfilComponent,
    HistorialComponent,
    PartidaComponent,
    MarcadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
