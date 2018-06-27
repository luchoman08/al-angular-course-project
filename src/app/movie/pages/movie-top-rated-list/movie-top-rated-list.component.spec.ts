import { ApiService } from '@app/core/services/shared/api.service';
import { MovieService } from '@app/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopRatedListComponent } from './movie-top-rated-list.component';
import { HttpClient } from '@angular/common/http';

describe('MovieTopRatedListComponent', () => {
  let component: MovieTopRatedListComponent;
  let fixture: ComponentFixture<MovieTopRatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTopRatedListComponent ],
      providers: [ MovieService, ApiService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
