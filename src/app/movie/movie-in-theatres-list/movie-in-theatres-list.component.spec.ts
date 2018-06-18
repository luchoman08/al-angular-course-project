import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInTheatresListComponent } from './movie-in-theatres-list.component';

describe('MovieInTheatresListComponent', () => {
  let component: MovieInTheatresListComponent;
  let fixture: ComponentFixture<MovieInTheatresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInTheatresListComponent ]
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
