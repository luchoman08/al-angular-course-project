import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMiniDetailListComponent } from './movie-mini-detail-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
describe('MovieMiniDetailListComponent', () => {
  let component: MovieMiniDetailListComponent;
  let fixture: ComponentFixture<MovieMiniDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMiniDetailListComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
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
