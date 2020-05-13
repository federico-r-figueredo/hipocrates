import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})

export class MyDialogComponent {

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
