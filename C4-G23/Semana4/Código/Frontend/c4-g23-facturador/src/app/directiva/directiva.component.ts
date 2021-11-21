import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  facturas: string[]=['fac_001','fact_002','fact_003','fact_005'];

  habilitar: boolean=true;
 

  constructor() { }

  ngOnInit(): void {
  }

  setHabilitar(): void{    
    this.habilitar=(this.habilitar==true)? false: true;

  }

  

}
