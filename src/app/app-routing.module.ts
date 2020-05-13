import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'pacientes', component: PacientesComponent },
  {path: 'medicos', component: MedicosComponent },
  {path: 'turnos', component: TurnosComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
