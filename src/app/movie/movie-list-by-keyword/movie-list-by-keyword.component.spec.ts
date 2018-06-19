import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListByKeywordComponent } from './movie-list-by-keyword.component';

describe('MovieListByKeywordComponent', () => {
  let component: MovieListByKeywordComponent;
  let fixture: ComponentFixture<MovieListByKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListByKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListByKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
