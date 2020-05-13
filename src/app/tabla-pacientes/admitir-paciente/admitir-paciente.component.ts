import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admitir-paciente',
  templateUrl: './admitir-paciente.component.html',
  styleUrls: ['./admitir-paciente.component.css']
})
export class AdmitirPacienteComponent {


  constructor(
    public dialogRef: MatDialogRef<AdmitirPacienteComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
