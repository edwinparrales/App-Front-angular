import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {BarraNavComponent} from "./componentes-front/barra-nav/barra-nav.component";
import { ClienteMainComponent } from './componentes/cliente/cliente-main/cliente-main.component';
import { ClienteListarComponent } from './componentes/cliente/cliente-listar/cliente-listar.component';
import { ClienteFrmComponent } from './componentes/cliente/cliente-frm/cliente-frm.component';
import { ClienteEditarComponent } from './componentes/cliente/cliente-editar/cliente-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    ClienteMainComponent,
    ClienteListarComponent,
    ClienteFrmComponent,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
