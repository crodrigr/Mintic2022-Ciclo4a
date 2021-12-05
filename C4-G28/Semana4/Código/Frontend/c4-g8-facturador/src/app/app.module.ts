import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ClienteService } from './cliente/cliente.service';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormComponent } from './cliente/form.component';
import { LoginComponent } from './usuarios/login.component';
import { DetalleComponent } from './cliente/detalle/detalle.component';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';


registerLocaleData(localeES, 'es');


const routes: Routes=[
   { path: '', redirectTo: '/clientes', pathMatch: 'full' },
   { path: 'directiva', component: DirectivaComponent, canActivate: [AuthGuard] },
   { path: 'productos', component: ProductosComponent,canActivate: [AuthGuard]},
   { path: 'clientes', component: ClienteComponent ,canActivate: [AuthGuard]},
   { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard] },
   { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard]},
   { path: 'facturas/:id', component: DetalleFacturaComponent, canActivate: [AuthGuard] },
   { path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent }
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
    LoginComponent,
    DetalleComponent,
    DetalleFacturaComponent,
    FacturasComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
   
  ],
  providers: [ClienteService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
