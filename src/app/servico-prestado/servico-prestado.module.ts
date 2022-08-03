import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServicoPrestadoListaComponent, 
    ServicoPrestadoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ServicoPrestadoRoutingModule,
  ], exports : [
    ServicoPrestadoListaComponent, 
    ServicoPrestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
