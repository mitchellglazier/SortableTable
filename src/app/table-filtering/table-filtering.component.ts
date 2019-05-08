import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AddProjectModelComponent } from '../add-project-model/add-project-model.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { EditProjectModelComponent } from '../edit-project-model/edit-project-model.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})

export class TableFilteringComponent {

 data;

  displayedColumns: string[] = [
      'projectOwner',
      'projectName',
      'city',
      'state',
      'bidDate',
      'completionDate',
      'estimate',
      'stage',
    ];

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

  dataSource: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService) {
    this.projectService.getAllProjects().valueChanges().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    });
  }

  addNewProject() {
    const dialogRef = this.dialog.open(AddProjectModelComponent, {
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editProject(row) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = row;
    console.log(row);

    this.dialog.open(EditProjectModelComponent, {
      width: '90%',
      height: '90%',
    });
  }

}
