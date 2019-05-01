import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectModelComponent } from './add-project-model.component';

describe('AddProjectModelComponent', () => {
  let component: AddProjectModelComponent;
  let fixture: ComponentFixture<AddProjectModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
