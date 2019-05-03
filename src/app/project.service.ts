import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db: AngularFireDatabase) { }

  createProject(project) {
    this.db.list('/projects').push(project);
  }

  getAll() {
    return this.db.list('/projects');
  }

}
