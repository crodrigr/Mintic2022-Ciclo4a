import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Region }  from './region';
import { ClienteService } from './cliente.service';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { ModalService } from './detalle/modal.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  title = 'Cliente';
     
  clientes: Cliente[]=[];

  clienteSeleccionado: Cliente;
  
  role: boolean;

  constructor(private clienteService: ClienteService,
              public authService: AuthService,
              private router: Router,
              private modalService: ModalService){

   }

  ngOnInit(): void {
    this.getClientes();
    if(this.authService.hasRole('ROLE_ADMIN')){
      this.role=false;
    }else{
      this.role=true;
    }
  }

  getClientes(): void{    
    this.clienteService.getClientes().subscribe(response => {
       this.clientes = response; 
    });


  }

  delete(cliente: Cliente): void {
    if(this.authService.isAuthenticated()){
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
        })
      }
    })
    
  }else{
    this.router.navigate(['login']) 
  }
 }

 abrirModal(cliente: Cliente) {
  this.clienteSeleccionado = cliente;
   this.modalService.abrirModal();
}

  

}
