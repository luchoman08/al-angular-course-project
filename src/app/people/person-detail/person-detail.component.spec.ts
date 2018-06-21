import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailComponent } from './person-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
