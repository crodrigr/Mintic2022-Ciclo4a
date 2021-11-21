import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  
  facturas: string[]=['fac_001','fact_002','fact_003','fact_004','fact_005','fact_006','fact_007','fact_008'];

  habilitar=true;
  msg=""
  
  constructor() { }

  ngOnInit(): void {
  }

  setHabilitar(): void{
     this.habilitar=(this.habilitar==true)? false: true;
  }

  mostrarMensaje(): void{
     if(this.msg==""){
     this.msg="Bienvenido al el modulo de desarrollo web";
     }else{
       this.msg="";
     }
  }

}
