import { Component, OnInit,Input, Output } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { AuthService } from '../../usuarios/auth.service';
import { Factura } from '../../facturas/models/factura';
import { FacturaService } from 'src/app/facturas/services/factura.service';


@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente: Cliente;
  

  titulo: string = "Detalle del cliente";

  constructor(private clienteService: ClienteService,
              public authService: AuthService,
              public modalService: ModalService,
              private facturaService: FacturaService
              ) { }

  ngOnInit(): void {
  }
 
  cerrarModal() {
    this.modalService.cerrarModal();   
  }

  delete(factura: Factura): void {
    swal.fire({    
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la factura: ${factura.descripcion}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.facturaService.delete(factura.id).subscribe(
          () => {
            this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura)
            swal.fire(
              'Factura Eliminada!',
              `Factura ${factura.descripcion} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

  


}
