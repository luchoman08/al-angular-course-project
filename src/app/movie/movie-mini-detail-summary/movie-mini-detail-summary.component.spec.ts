import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMiniDetailSummaryComponent } from './movie-mini-detail-summary.component';

describe('MovieMiniDetailSummaryComponent', () => {
  let component: MovieMiniDetailSummaryComponent;
  let fixture: ComponentFixture<MovieMiniDetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMiniDetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMiniDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
