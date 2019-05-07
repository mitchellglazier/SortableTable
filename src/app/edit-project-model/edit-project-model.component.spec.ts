import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectModelComponent } from './edit-project-model.component';

describe('EditProjectModelComponent', () => {
  let component: EditProjectModelComponent;
  let fixture: ComponentFixture<EditProjectModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
