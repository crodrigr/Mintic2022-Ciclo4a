import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Region }  from './region';
import { ClienteService } from './cliente.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  title = 'Cliente';
     
  clientes: Cliente[];

  constructor(private clienteService: ClienteService){

   }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void{    
    this.clienteService.getClientes().subscribe(response => {
       this.clientes = response; 
    });


  }
  

}
