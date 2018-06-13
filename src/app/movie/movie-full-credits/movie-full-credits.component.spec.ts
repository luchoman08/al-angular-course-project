import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullCreditsComponent } from './movie-full-credits.component';

describe('MovieFullCreditsComponent', () => {
  let component: MovieFullCreditsComponent;
  let fixture: ComponentFixture<MovieFullCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullCreditsComponent ]
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
