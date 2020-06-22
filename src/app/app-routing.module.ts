import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PartidaComponent } from './componentes/partida/partida.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ReplayComponent } from './componentes/replay/replay.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'partida/:id', component:PartidaComponent},
  {path:'partida', component:PartidaComponent},
  {path:'historial', component:HistorialComponent},
  {path:'replay/:id', component:ReplayComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
