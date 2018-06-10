import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMiniDetailComponent } from './movie-mini-detail.component';

describe('MovieMiniDetailComponent', () => {
  let component: MovieMiniDetailComponent;
  let fixture: ComponentFixture<MovieMiniDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMiniDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMiniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
