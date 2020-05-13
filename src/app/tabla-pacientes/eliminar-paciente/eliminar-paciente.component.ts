import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { patient } from 'src/app/models/patient.model';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.css']
})

export class EliminarPacienteComponent {

  patient: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EliminarPacienteComponent>, private firebaseService: FirebaseService) {
    this.patient = this.data;
    console.log(this.patient);
  }

  deletePatient(key){
    this.dialogRef.close();
    this.firebaseService.deletePatient(key);
  }

 
}