import { SharedModule } from '@app/shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCreditDetailComponent } from '@app/credits/movie-credit-detail/movie-credit-detail.component';
import { MaterialModule } from '@app/shared/material.module';

describe('MovieCreditDetailComponent', () => {
  let component: MovieCreditDetailComponent;
  let fixture: ComponentFixture<MovieCreditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCreditDetailComponent ],
      imports:      [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCreditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
