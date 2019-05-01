import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddProjectModelComponent } from '../add-project-model/add-project-model.component';
import { Projects } from '../projects';
import { ELEMENT_DATA } from '../mock-data';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})

export class TableFilteringComponent implements OnInit {

  columns: string[];
  projects: Observable<any[]>;

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

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  stageFilter = new FormControl();
  projectNameFilter = new FormControl();
  cityFilter = new FormControl();
  stateFilter = new FormControl();
  bidDateFilter = new FormControl();
  completionDateFilter = new FormControl();
  estimateFilter = new FormControl();
  projectOwnerFilter = new FormControl();
  globalFilter = '';

  filteredValues = {
    stage: '', projectName: '', city: '', projectOwner: '',
    state: '', bidDate: '', completionDate: '', estimate: ''
  };

  constructor(public dialog: MatDialog, private atService: ProjectsService) {}

  ngOnInit() {

    this.columns = this.atService.getColumns();

    this.projects = this.atService.getProjects();

    this.projectOwnerFilter.valueChanges.subscribe((projectOwnerFilterValue) => {
      this.filteredValues.projectOwner = projectOwnerFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.stageFilter.valueChanges.subscribe((stageFilterValue) => {
      this.filteredValues.stage = stageFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.projectNameFilter.valueChanges.subscribe((projectNameFilterValue) => {
      this.filteredValues.projectName = projectNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.cityFilter.valueChanges.subscribe((cityFilterValue) => {
      this.filteredValues.city = cityFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.stateFilter.valueChanges.subscribe((stateFilterValue) => {
      this.filteredValues.state = stateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.bidDateFilter.valueChanges.subscribe((bidDateFilterValue) => {
      this.filteredValues.bidDate = bidDateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.completionDateFilter.valueChanges.subscribe((completionDateFilterValue) => {
      this.filteredValues.completionDate = completionDateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.estimateFilter.valueChanges.subscribe((estimateFilterValue) => {
      this.filteredValues.estimate = estimateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();

    this.dataSource.paginator = this.paginator;

  }

  addNewProject() {
    const dialogRef = this.dialog.open(AddProjectModelComponent, {
    });
  }

  applyFilter(filter) {
    this.globalFilter = filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  // numFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filterPredicate = (data: any, fitlerString: string) => {

  //       return data.position == filterValue;
  //   };
  //   this.dataSource.filter = filterValue;
  // }

  customFilterPredicate() {
    const myFilterPredicate = (data: Projects, filter: string): boolean => {
      let globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.projectName.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      const searchString = JSON.parse(filter);
      return data.stage.toString().trim().indexOf(searchString.stage) !== -1 &&
        data.projectName.toString().trim().toLowerCase().indexOf(searchString.projectName.toLowerCase()) !== -1 &&
        data.city.toString().trim().toLowerCase().indexOf(searchString.city.toLowerCase()) !== -1 &&
        data.state.toString().trim().toLowerCase().indexOf(searchString.state.toLowerCase()) !== -1 &&
        data.bidDate.toString().trim().toLowerCase().indexOf(searchString.bidDate.toLowerCase()) !== -1 &&
        data.completionDate.toString().trim().toLowerCase().indexOf(searchString.completionDate.toLowerCase()) !== -1 &&
        data.estimate.toString().trim().toLowerCase().indexOf(searchString.estimate.toLowerCase()) !== -1 &&
        data.projectOwner.toString().trim().toLowerCase().indexOf(searchString.projectOwner.toLowerCase()) !== -1;
    };
    return myFilterPredicate;
  }
}
