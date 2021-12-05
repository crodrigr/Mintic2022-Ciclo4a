import { Component, OnInit } from '@angular/core';
import { Cliente }  from './cliente';
import { Region }  from './region';
import { ClienteService } from './cliente.service';
import { map } from 'rxjs/operators';
import  swal  from 'sweetalert2';
import { AuthService  } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Listado de clientes';

  clientes: Cliente[]=[];
  isDisable: boolean=false;

    
  constructor(private clienteService:  ClienteService,
              private authService: AuthService,
              private router: Router){

  }


  ngOnInit(){
    this.isDiableValidate();
    this.getClientes();
  }

  isDiableValidate(): void{
    if (this.authService.isAuthenticated()==false) {
       if(this.authService.hasRole('ROLE_ADMIN')==true){
            this.isDisable=true
       }
    }else{
      this.isDisable=false 
    }
  }
 
  getClientes(): void{
     this.clienteService.getClientes().subscribe(respuesta=>{
      this.clientes = respuesta;
      });

  }

  delete(cliente: Cliente): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe({
               next: () => {
                this.clientes = this.clientes.filter(cli => cli !== cliente)
                        swal.fire(
                          'Cliente Eliminado!',
                          `Cliente ${cliente.nombre} eliminado con éxito.`,
                          'success'
                        )
               }
        })///xxxx
      }
    })
    
  }

  // delete(cliente: Cliente): void {
  //        this.clienteService.delete(cliente.id).subscribe(()=>{
  //             this.clientes=this.clientes.filter(cli => cli !== cliente)
  //       })
    
  // }


  
  

  
}
