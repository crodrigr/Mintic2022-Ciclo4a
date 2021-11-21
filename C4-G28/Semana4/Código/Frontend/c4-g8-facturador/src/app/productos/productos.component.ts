import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  
  productos: string[]=['nevaras','televisores','equipos de sonido','ventiladores','celulares'];

  constructor() { }

  ngOnInit(): void {
  }

}
