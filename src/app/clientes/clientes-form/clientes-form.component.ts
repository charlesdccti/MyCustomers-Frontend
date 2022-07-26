import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cliente);
    this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
      }
      )
  }


}
