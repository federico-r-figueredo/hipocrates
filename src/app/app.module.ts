import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule } from '@angular/material';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { TurnosComponent } from './turnos/turnos.component';
import {MatBadgeModule} from '@angular/material/badge';

import { environment } from './../environments/environment';
import {MatTreeModule} from '@angular/material/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EditarPacienteComponent } from './tabla-pacientes/editar-paciente/editar-paciente.component';
import { EliminarPacienteComponent } from './tabla-pacientes/eliminar-paciente/eliminar-paciente.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PatientsService } from './services/patients/patients.service';
import { AddPatientComponent } from './tabla-pacientes/add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPacientesComponent } from './tabla-pacientes/tabla-pacientes.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    GridListComponent,
    InicioComponent,
    PacientesComponent,
    MedicosComponent,
    TurnosComponent,
    MyDialogComponent,
    EditarPacienteComponent,
    EliminarPacienteComponent,
    AddPatientComponent,
    TablaPacientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    MatBadgeModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],

  exports: [
    MatPaginatorModule, 
    MatSortModule,
    ReactiveFormsModule,
    MatRadioModule
  ],

  entryComponents: [EditarPacienteComponent, AddPatientComponent, EliminarPacienteComponent],
  providers: [PatientsService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
