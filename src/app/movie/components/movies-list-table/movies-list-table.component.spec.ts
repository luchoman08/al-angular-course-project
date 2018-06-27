import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListTableComponent } from './movies-list-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('MoviesListTableComponent', () => {
  let component: MoviesListTableComponent;
  let fixture: ComponentFixture<MoviesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListTableComponent ],
      
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
