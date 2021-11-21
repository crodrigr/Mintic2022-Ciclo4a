import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';
import { Region } from './region';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string="";

  constructor(private http: HttpClient){
      this.url=environment.apiUrl+'/api';
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+'/clientes');
  }

}
