import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface Companies {
  company: string;
  position: number;
  city: string;
  state: string;
}

const ELEMENT_DATA: Companies[] = [
  { position: 1, company: '5 Guys', city: 'Stansbury Park', state: 'UT' },
  { position: 2, company: 'Olive Garden', city: 'West Valley', state: 'UT' },
  { position: 3, company: 'Tony Burgers', city: 'Herriman', state: 'NV' },
  { position: 4, company: 'Panda Express', city: 'Provo', state: 'CA' },
  { position: 5, company: 'Red Basil', city: 'Kanab', state: 'CA' },
  { position: 6, company: 'Arbys', city: 'St. George', state: 'CA' },
  { position: 7, company: 'Wendys', city: 'Tooele', state: 'HI' },
  { position: 8, company: 'Pizza Pie', city: 'Cedar City', state: 'AZ' },
  { position: 9, company: 'McDonalds', city: 'Kanab', state: 'MA' },
  { position: 10, company: 'Burger King', city: 'Cedar City', state: 'NY' },
];

@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})
export class TableFilteringComponent implements OnInit {
  displayedColumns: string[] = ['position', 'company', 'city', 'state'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  positionFilter = new FormControl();
  companyFilter = new FormControl();
  cityFilter = new FormControl();
  stateFilter = new FormControl();
  globalFilter = '';

  filteredValues = {
    position: '', company: '', city: '',
    state: ''
  };
  ngOnInit() {

    this.positionFilter.valueChanges.subscribe((positionFilterValue) => {
      this.filteredValues.position = positionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.companyFilter.valueChanges.subscribe((companyFilterValue) => {
      this.filteredValues.company = companyFilterValue;
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

    this.dataSource.filterPredicate = this.customFilterPredicate();

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
    const myFilterPredicate = (data: Companies, filter: string): boolean => {
      let globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.company.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      let searchString = JSON.parse(filter);
      return data.position.toString().trim().indexOf(searchString.position) !== -1 &&
        data.company.toString().trim().toLowerCase().indexOf(searchString.company.toLowerCase()) !== -1 &&
        data.city.toString().trim().toLowerCase().indexOf(searchString.city.toLowerCase()) !== -1 &&
        data.state.toString().trim().toLowerCase().indexOf(searchString.state.toLowerCase()) !== -1;
    };
    return myFilterPredicate;
  }
}
