import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ClienteService } from './cliente/cliente.service';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes: Routes=[
   { path: '', redirectTo: '/clientes', pathMatch: 'full' },
   { path: 'directiva', component: DirectivaComponent},
   { path: 'productos', component: ProductosComponent},
   { path: 'clientes', component: ClienteComponent}   
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
