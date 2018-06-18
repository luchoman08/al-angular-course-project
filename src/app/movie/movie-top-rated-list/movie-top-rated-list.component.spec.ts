import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopRatedListComponent } from './movie-top-rated-list.component';

describe('MovieTopRatedListComponent', () => {
  let component: MovieTopRatedListComponent;
  let fixture: ComponentFixture<MovieTopRatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTopRatedListComponent ]
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
