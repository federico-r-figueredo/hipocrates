import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import {MAT_DIALOG_DATA} from '@angular/material';
import { patient } from 'src/app/models/patient.model';
import { FirebaseService } from 'src/app/firebase.service';
import { HealthInsuranceService } from 'src/app/health-insurance.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})

export class EditarPacienteComponent {

patient: any;
thisProvider: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: patient,public dialogRef: MatDialogRef<EditarPacienteComponent>, private firebaseService: FirebaseService, private providersService: HealthInsuranceService) {
    this.patient = this.data;
  }

  updatePatient(){
    this.dialogRef.close();
    this.firebaseService.updatePatient(lodash.omit(this.patient, 'insuranceName'));
  }

 
}


