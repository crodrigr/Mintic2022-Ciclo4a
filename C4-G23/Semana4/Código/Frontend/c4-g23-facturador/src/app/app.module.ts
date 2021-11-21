import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { ClienteService } from './clientes/cliente.service';

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes=[
  {path: '',redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent },
  {path: 'directiva', component: DirectivaComponent },
  {path: 'clientes', component: ClienteComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
