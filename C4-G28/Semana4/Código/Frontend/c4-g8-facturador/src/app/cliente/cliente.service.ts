import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Region }  from './region';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 
  private urlApi: string ="";
  
  constructor(private http: HttpClient,
              private router: Router){
              this.urlApi = environment.apiUrl+'/api';
            }

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.urlApi + '/clientes/regiones');
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlApi + '/clientes');
  }
}

