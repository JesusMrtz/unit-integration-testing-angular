import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { HospitalComponent } from '../../basicas/hospital/hospital.component';
import { MedicoComponent } from '../../basicas/medico/medico.component';
import { IncrementadorComponent } from '../../basicas/incrementador/incrementador.component';

export const ROUTES: Routes = [
    {path: 'hospital', component: HospitalComponent},
    { path: 'medico/:id', component: MedicoComponent},
    {path: '**', component: IncrementadorComponent}
];
