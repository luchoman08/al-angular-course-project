import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListByGenreComponent } from './movie-list-by-genre.component';
import { MovieService } from '@app/core';

describe('MovieListByGenreComponent', () => {
  let component: MovieListByGenreComponent;
  let fixture: ComponentFixture<MovieListByGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListByGenreComponent ],
      providers: [ MovieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
