import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { patient } from 'src/app/models/patient.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  private itemsCollection: AngularFirestoreCollection<patient>;
  private itemDoc: AngularFirestoreDocument<patient>;
  patients: Observable<patient[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<patient>('patients');
    this.patients = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as patient;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addPatient(newPatient) {
    this.itemsCollection.add(newPatient);
  }

  patientList(){
    return this.patients;
  }

  erasePatient(Patient: patient){   
    this.itemDoc = this.afs.doc<patient>(`patients/${Patient.$key}`)
    this.itemDoc.delete();  
  }
}