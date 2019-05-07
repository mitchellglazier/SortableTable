
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-edit-project-model',
  templateUrl: './edit-project-model.component.html',
  styleUrls: ['./edit-project-model.component.css']
})
export class EditProjectModelComponent {

  stages: string[] = [
    'Bid',
    'Won',
    'Lost',
    'Possible Bid'
  ];

  projectOwners: string[] = [
    'M Guinn Glazier',
    'T Charles Metcalf',
    'R L Klay Jones'
  ];

  constructor(
    public dialogRef: MatDialogRef<EditProjectModelComponent>,
    private db: AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) data) {}

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    console.log('data not submitted for real');
    this.dialogRef.close();
  }

}
