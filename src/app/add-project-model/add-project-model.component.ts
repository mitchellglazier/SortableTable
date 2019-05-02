import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import { Projects } from '../Projects';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-add-project-model',
  templateUrl: './add-project-model.component.html',
  styleUrls: ['./add-project-model.component.css']
})
export class AddProjectModelComponent {

  projectOwners: string[] = [
    'M Guinn Glazier',
    'T Charles Metcalf',
    'R L Klay Jones'
  ];

  stages: string[] = [
    'Bid',
    'Won',
    'Lost',
    'Possible Bid'
  ];

  constructor(
    public dialogRef: MatDialogRef<AddProjectModelComponent>,
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: Projects) {}

  submit(project) {
    this.projectService.createProject(project);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
