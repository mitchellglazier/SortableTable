import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddProjectModelComponent } from '../add-project-model/add-project-model.component';
import { Projects } from '../Projects';

export let ELEMENT_DATA: Projects[] = [
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Bid',
    projectName: 'New Toilets',
    city: 'Stansbury Park',
    state: 'UT',
    bidDate: new Date('12/17/2019'),
    completionDate: new Date('10/01/2018'),
    estimate: 53235
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Build Building',
    city: 'West Valley',
    state: 'UT',
    bidDate: new Date('12/15/2018'),
    completionDate: new Date('05/05/2019'),
    estimate: 53
  },
  {
    projectOwner: '',
    stage: 'Lost',
    projectName: 'Clean Gutters',
    city: 'Herriman',
    state: 'NV',
    bidDate: new Date('09/02/2018'),
    completionDate: new Date('12/01/2018'),
    estimate: 1000000
  }
  ,
  {
    projectOwner: 'R L Klay Jones',
    stage: 'Possible Bid',
    projectName: 'Panda Express Renovation',
    city: 'Provo',
    state: 'CA',
    bidDate: new Date('03/06/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 621834
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: '',
    projectName: 'Build Bike',
    city: 'Kanab',
    state: 'CA',
    bidDate: new Date('08/12/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 999999
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Laundry',
    city: 'St. George',
    state: 'CA',
    bidDate: new Date('11/23/2018'),
    completionDate: new Date(''),
    estimate: 13215
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Lost',
    projectName: 'Hunting',
    city: 'Tooele',
    state: 'HI',
    bidDate: new Date('01/12/2018'),
    completionDate: new Date('07/01/2018'),
    estimate: 153215
  },
  {
    projectOwner: 'R L Klay Jones',
    stage: 'Possible Bid',
    projectName: 'Drive to Cedar',
    city: 'Cedar City',
    state: 'AZ',
    bidDate: new Date('02/14/2018'),
    completionDate: new Date('08/10/2018'),
    estimate: 1212
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Bid',
    projectName: 'Wash Dishes',
    city: 'Kanab',
    state: 'MA',
    bidDate: new Date('08/29/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 12000
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Carpet Cleaning',
    city: 'Cedar City',
    state: 'NY',
    bidDate: new Date('10/15/2018'),
    completionDate: new Date('10/16/2018'),
    estimate: 1311200
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Bid',
    projectName: 'New Toilets',
    city: 'Stansbury Park',
    state: 'UT',
    bidDate: new Date('07/30/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 53235
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Build Building',
    city: 'West Valley',
    state: 'UT',
    bidDate: new Date('12/15/2018'),
    completionDate: new Date('05/05/2019'),
    estimate: 53
  },
  {
    projectOwner: 'R L Klay Jones',
    stage: 'Lost',
    projectName: 'Clean Gutters',
    city: 'Herriman',
    state: 'NV',
    bidDate: new Date('09/02/2018'),
    completionDate: new Date('12/01/2018'),
    estimate: 1000000
  }
  ,
  {
    projectOwner: 'R L Klay Jones',
    stage: 'Possible Bid',
    projectName: 'Panda Express Renovation',
    city: 'Provo',
    state: 'CA',
    bidDate: new Date('03/06/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 621834
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Bid',
    projectName: 'Build Bike',
    city: 'Kanab',
    state: 'CA',
    bidDate: new Date('08/12/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 999999
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Laundry',
    city: 'St. George',
    state: 'CA',
    bidDate: new Date('11/23/2018'),
    completionDate: new Date('06/01/2019'),
    estimate: 13215
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Lost',
    projectName: 'Hunting',
    city: 'Tooele',
    state: 'HI',
    bidDate: new Date('01/12/2018'),
    completionDate: new Date('07/01/2018'),
    estimate: 153215
  },
  {
    projectOwner: 'R L Klay Jones',
    stage: 'Possible Bid',
    projectName: 'Drive to Cedar',
    city: 'Cedar City',
    state: 'AZ',
    bidDate: new Date('02/14/2018'),
    completionDate: new Date('08/10/2018'),
    estimate: 1212
  },
  {
    projectOwner: 'M Guinn Glazier',
    stage: 'Bid',
    projectName: 'Wash Dishes',
    city: 'Kanab',
    state: 'MA',
    bidDate: new Date('08/29/2018'),
    completionDate: new Date('10/01/2018'),
    estimate: 12000
  },
  {
    projectOwner: 'T Charles Metcalf',
    stage: 'Won',
    projectName: 'Carpet Cleaning',
    city: 'Cedar City',
    state: 'NY',
    bidDate: new Date('10/15/2018'),
    completionDate: new Date('10/16/2018'),
    estimate: 1311200
  },
];


@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})

export class TableFilteringComponent implements OnInit {

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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

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
