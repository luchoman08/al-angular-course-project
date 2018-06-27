import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieKeywordsListComponent } from '@app/keywords/shared/movie-keywords-list/movie-keywords-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieKeywordsListComponent', () => {
  let component: MovieKeywordsListComponent;
  let fixture: ComponentFixture<MovieKeywordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieKeywordsListComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieKeywordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
