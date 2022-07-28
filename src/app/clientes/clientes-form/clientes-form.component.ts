import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styles: [
  ]
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[];

  constructor( 
    private service: ClientesService ,
    private router: Router) {
      this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }


  voltarParaListagem(){
    this.router.navigate(['/clientes-lista'])
  }


  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      )
  }


}
