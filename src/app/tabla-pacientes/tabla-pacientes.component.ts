import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EliminarPacienteComponent } from './eliminar-paciente/eliminar-paciente.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { HealthInsuranceService } from '../health-insurance.service';

export interface patient {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  age: number;
  provider: string;
  gender: string;
  nid: string;
  comment: string;
}

@Component({
  selector: 'tabla-pacientes',
  templateUrl: './tabla-pacientes.component.html',
  styleUrls: ['./tabla-pacientes.component.css']
})
export class TablaPacientesComponent implements AfterViewInit {

  displayedColumns = ['name', 'gender', 'age', 'nid', 'phone', 'address', 'email', 'insurance', 'actions'];
  pacientesTodos = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService, private healthnsuranceService: HealthInsuranceService) {
    this.firebaseService.getPatients().subscribe(
      list => {
        let array = list.map(item => {
          let insuranceName = this.healthnsuranceService.getInsuranceName(item.payload.val()['provider']);
            return {
              $key: item.key,
              insuranceName, 
              ...item.payload.val()
            };
          });
          this.pacientesTodos.data = array;
          this.pacientesTodos.sort = this.sort;
          this.pacientesTodos.paginator = this.paginator;
    });
    
  }
  
  
  ngAfterViewInit() {
 
  }
        


    
 
  openDialog3(paciente): void {

    const dialogRef = this.dialog.open( EditarPacienteComponent, {
      data: paciente,
      width: '25%',
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open( AddPatientComponent, {
      width: '25%',
    });
  }

  openDialog5(paciente): void {
    const dialogRef = this.dialog.open( EliminarPacienteComponent, {
      data: paciente,
      width: '25%',
    });
  }

  onSearchClear(){
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter(){
    this.pacientesTodos.filter = this.searchKey.trim().toLowerCase();
  }

}
