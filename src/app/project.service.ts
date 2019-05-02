import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db: AngularFireDatabase) { }

  createProject(project) {
    this.db.list('/projects').push(project);
  }
}
