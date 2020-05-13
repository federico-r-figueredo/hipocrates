import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    gender: new FormControl('1'),
    age: new FormControl(''),
    nid: new FormControl(''),
    provider: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.minLength(7)]),
    address: new FormControl(''),
    email: new FormControl('', Validators.email),
    comment: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      gender: '1',
      age: '',
      nid: '',
      new: '',
      phone: '',
      address: '',
      email: '',
      comment: ''
    });
  }


  patientList: AngularFireList<any>;

   constructor(private db: AngularFireDatabase) {}

  getPatients(){
    this.patientList = this.db.list('/patients');
    return this.patientList.snapshotChanges();
  };

  addPatient(newPatient){
    var filteredPatient = JSON.parse(JSON.stringify(newPatient)); //removes undefined fields
    return this.patientList.push({
      name: filteredPatient.name,
      gender: filteredPatient.gender,
      age: filteredPatient.age,
      nid: filteredPatient.nid,
      phone: filteredPatient.phone,
      address: filteredPatient.address,
      email: filteredPatient.email,
      provider: filteredPatient.provider,
      comment: filteredPatient.comment
    });
  }

  updatePatient(updatedPatient) {
    this.patientList.update(updatedPatient.$key,{
      name: updatedPatient.name,
      gender: updatedPatient.gender,
      age: updatedPatient.age,
      nid: updatedPatient.nid,
      phone: updatedPatient.phone,
      address: updatedPatient.address,
      email: updatedPatient.email,
      provider: updatedPatient.provider,
      comment: updatedPatient.comment
    });
  }

  deletePatient(key) {
    this.patientList.remove(key);
  }
}



