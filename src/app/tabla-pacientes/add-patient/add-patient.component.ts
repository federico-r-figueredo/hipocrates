import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import {MAT_DIALOG_DATA} from '@angular/material';
import { patient } from 'src/app/models/patient.model';
import { FirebaseService } from 'src/app/firebase.service';
import { HealthInsuranceService } from 'src/app/health-insurance.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: patient,public dialogRef: MatDialogRef<AddPatientComponent>, private firebaseService: FirebaseService, private providersService: HealthInsuranceService) {
  }

  addPatient(){
    this.dialogRef.close();
    if (this.firebaseService.form.valid){
      this.firebaseService.addPatient(this.firebaseService.form.value);
      this.firebaseService.form.reset();
    }
  }

}