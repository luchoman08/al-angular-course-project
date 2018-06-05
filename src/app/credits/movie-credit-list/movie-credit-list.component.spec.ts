import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCreditListComponent } from '@app/credits/movie-credit-list/movie-credit-list.component';

describe('MovieCreditListComponent', () => {
  let component: MovieCreditListComponent;
  let fixture: ComponentFixture<MovieCreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCreditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
