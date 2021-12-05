import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }  from '@angular/forms'

//Servicios
import { ClienteService } from './clientes/cliente.service';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor'

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormComponent } from './clientes/form.component';
import { LoginComponent } from './usuarios/login.component';

const routes=[
  {path: '',redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
  {path: 'directiva', component: DirectivaComponent,canActivate: [AuthGuard] },
  {path: 'clientes', component: ClienteComponent,canActivate: [AuthGuard] },
  {path: 'clientes/form', component: FormComponent,canActivate: [AuthGuard]},
  {path: 'clientes/form/:id', component: FormComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    FormComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService,AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
