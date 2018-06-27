import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInTheatresListComponent } from './movie-in-theatres-list.component';
import { MovieService } from '@app/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieInTheatresListComponent', () => {
  let component: MovieInTheatresListComponent;
  let fixture: ComponentFixture<MovieInTheatresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInTheatresListComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [ MovieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInTheatresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
