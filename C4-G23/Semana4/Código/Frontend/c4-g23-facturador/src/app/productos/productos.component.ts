import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: string[]=['Vetiladores','Televisores','Radios','Celulares','Consolas de video juegos'];

  title="Listado de productos";

  constructor() { 

  }

  ngOnInit(): void {

  }

}
