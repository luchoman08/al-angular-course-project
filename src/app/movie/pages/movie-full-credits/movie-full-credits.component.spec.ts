import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullCreditsComponent } from './movie-full-credits.component';
import { MovieService } from '@app/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieFullCreditsComponent', () => {
  let component: MovieFullCreditsComponent;
  let fixture: ComponentFixture<MovieFullCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullCreditsComponent ],
      providers: [ MovieService ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [ RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
