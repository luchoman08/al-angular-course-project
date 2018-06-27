import { HttpClient } from '@angular/common/http';
import { MovieService } from '@app/core/services';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPopularListComponent } from './movies-popular-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ApiService } from '@app/core/services/shared';

describe('MoviesPopularListComponent', () => {
  let component: MoviesPopularListComponent;
  let fixture: ComponentFixture<MoviesPopularListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPopularListComponent ],
      providers: [ MovieService, ApiService, HttpClient ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
