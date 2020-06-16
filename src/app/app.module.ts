import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './pruebas_unitarias/intermedio/medicos/medicos.component';
import { MedicoComponent } from './pruebas_integracion/basicas/medico/medico.component';
import { HospitalComponent } from './pruebas_integracion/basicas/hospital/hospital.component';
import { IncrementadorComponent } from './pruebas_integracion/basicas/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './pruebas_integracion/avanzado/rutas/app.routes';
import { NavbarComponent } from './pruebas_integracion/avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './pruebas_integracion/avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
