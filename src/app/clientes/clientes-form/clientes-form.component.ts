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

  constructor( private service : ClientesService ) { 
    this.cliente = service.getCliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente.nome);
  }

}
