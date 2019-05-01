import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import { Projects } from '../projects';


@Component({
  selector: 'app-add-project-model',
  templateUrl: './add-project-model.component.html',
  styleUrls: ['./add-project-model.component.css']
})
export class AddProjectModelComponent {

  constructor(
    public dialogRef: MatDialogRef<AddProjectModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Projects) {}

  close(): void {
    this.dialogRef.close();
  }

}
