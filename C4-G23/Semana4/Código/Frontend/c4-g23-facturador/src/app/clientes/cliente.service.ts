import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';
import { Region } from './region';
import { Observable, throwError } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string="";

  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient,
              private router: Router){
       this.url=environment.apiUrl+'/api';
  
      
       

  }

   getClientes(): Observable<Cliente[]> {
    return this.http.get(this.url + '/clientes').pipe(    
      map((response: any) => {
        (response.content as Cliente[])
        // .map(cliente=>{cliente.nombre=cliente.nombre.toUpperCase();
        // return cliente}
        //);
        return response;           
      }));     
  }

  create(cliente: Cliente): Observable<Cliente>{
     return this.http.post<Cliente>(`${this.url}/clientes`,cliente).pipe(
         map((response:any)=> response.cliente as Cliente),
         catchError(e=>{
            if(e.status==400){
              return throwError(()=>e);
            }
            if(e.error.mensaje){
              console.error(e.error.mensaje);
            }
            return throwError(()=>e);
         })
     );
  }

  update(cliente: Cliente): Observable<Cliente>{
      return this.http.put<Cliente>(`${this.url}/cliente/${cliente.id}`,cliente).pipe(
        catchError(e=>{
           if(e.statu==400){
             return throwError(()=>e);
           }
           if(e.error.mensaje){
             console.error(e.error.mensaje);
           }
           return throwError(()=>e);
        })       
      );
   }

   delete(id: number): Observable<Cliente>{
     return this.http.delete<Cliente>(`${this.url}/clientes/${id}`).pipe(
       catchError(e=>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
         }   
        return throwError(()=>e);
       }      
       ));     
    }

    getRegiones(): Observable<Region[]>{
      return this.http.get<Region[]>(`${this.url}/clientes/regiones`);
    }

    getCliente(id: number): Observable<Cliente>{
      return this.http.get<Cliente>(`${this.url}/cliente/${id}`).pipe(
        catchError(e=>{
          if(e.status!=401 && e.erro.mensaje){
            this.router.navigate(['/clientes']);
            console.log(e.error.mensaje);
          }
          return throwError(()=>e);
        })
      );
   }

}
