import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProjectService {

  constructor(private db: AngularFireDatabase) { }

  createProject(project) {
    return this.db.list('/projects').push(project);
  }

  getAllProjects() {
    return this.db.list('/projects');
  }

}
