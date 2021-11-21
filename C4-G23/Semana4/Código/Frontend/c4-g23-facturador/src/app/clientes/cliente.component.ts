import { Component, OnInit } from '@angular/core';
import { Cliente }  from './cliente';
import { Region }  from './region';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Listado de clientes';

  clientes: Cliente[]=[];
  
  constructor(private clienteService:  ClienteService){

  }


  ngOnInit(){
    this.getClientes();
  }
 
  getClientes(): void{
     this.clienteService.getClientes().subscribe(clientes=>{
         this.clientes=clientes
      });

  }

  
}
