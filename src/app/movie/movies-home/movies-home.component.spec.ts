import { HttpClient } from '@angular/common/http';
import { MovieService } from '@app/core/services';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomeComponent } from './movies-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ApiService } from '@app/core/services/shared';

describe('MoviesHomeComponent', () => {
  let component: MoviesHomeComponent;
  let fixture: ComponentFixture<MoviesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesHomeComponent ],
      providers: [ MovieService, ApiService, HttpClient ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
