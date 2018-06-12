import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMiniDetailListComponent } from './movie-mini-detail-list.component';

describe('MovieMiniDetailListComponent', () => {
  let component: MovieMiniDetailListComponent;
  let fixture: ComponentFixture<MovieMiniDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMiniDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMiniDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
