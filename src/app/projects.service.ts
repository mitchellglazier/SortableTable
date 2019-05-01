import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { ELEMENT_DATA } from './mock-data';

@Injectable()

export class ProjectsService {

  constructor() { }

  getProjects(): Observable<any[]> {
    return Observable.of(ELEMENT_DATA).delay(100);
  }

  getColumns(): string[] {
    return [
      'projectOwner',
      'projectName',
      'city',
      'state',
      'bidDate',
      'comletionDate',
      'estimate',
      'stage',
    ];
  }
}
