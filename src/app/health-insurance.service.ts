import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as lodash from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService {

  providersRef: AngularFireList<any>;
  providers= [];

  constructor(db: AngularFireDatabase) {
    this.providersRef = db.list('/health_insurance');
    this.providersRef.snapshotChanges().subscribe(
      list => {
        this.providers = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
      });
    }
    

  getInsuranceName($key) {
    if ($key == "0")
      return "";
    else{
      return lodash.find(this.providers, (obj) => { return obj.$key == $key; },['name']);
    }
  }
  
}


