import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddProjectModelComponent } from '../add-project-model/add-project-model.component';
import { Projects } from '../Projects';
import { ProjectService } from '../project.service';

const ELEMENT_DATA: Projects[] = [

];

@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})

export class TableFilteringComponent implements OnInit {
  
  dataSource: MatTableDataSource<Projects>;

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

  projects$;

  constructor(public dialog: MatDialog, private projectService: ProjectService) {
    this.projects$ = this.projectService.getAll();
  }

  ngOnInit() {

    this.projectOwnerFilter.valueChanges.subscribe((projectOwnerFilterValue) => {
      this.filteredValues.projectOwner = projectOwnerFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.stageFilter.valueChanges.subscribe((stageFilterValue) => {
      this.filteredValues.stage = stageFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.projectNameFilter.valueChanges.subscribe((projectNameFilterValue) => {
      this.filteredValues.projectName = projectNameFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.cityFilter.valueChanges.subscribe((cityFilterValue) => {
      this.filteredValues.city = cityFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.stateFilter.valueChanges.subscribe((stateFilterValue) => {
      this.filteredValues.state = stateFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.bidDateFilter.valueChanges.subscribe((bidDateFilterValue) => {
      this.filteredValues.bidDate = bidDateFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.completionDateFilter.valueChanges.subscribe((completionDateFilterValue) => {
      this.filteredValues.completionDate = completionDateFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.estimateFilter.valueChanges.subscribe((estimateFilterValue) => {
      this.filteredValues.estimate = estimateFilterValue;
      this.projects$.filter = JSON.stringify(this.filteredValues);
    });

    this.projects$.filterPredicate = this.customFilterPredicate();

    this.projects$.paginator = this.paginator;

  }

  addNewProject() {
    const dialogRef = this.dialog.open(AddProjectModelComponent, {
    });
  }

  applyFilter(filter) {
    this.globalFilter = filter;
    this.projects$.filter = JSON.stringify(this.filteredValues);
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
