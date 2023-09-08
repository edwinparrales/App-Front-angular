import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";
import {ClienteMainComponent} from "./componentes/cliente/cliente-main/cliente-main.component";
import {ClienteEditarComponent} from "./componentes/cliente/cliente-editar/cliente-editar.component";


const routes: Routes = [
  {path:'cliente',component:ClienteMainComponent},
  {path:'cliente/editar/:id',component:ClienteEditarComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
