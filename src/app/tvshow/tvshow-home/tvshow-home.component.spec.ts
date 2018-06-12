import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowHomeComponent } from './tvshow-home.component';

describe('TvshowHomeComponent', () => {
  let component: TvshowHomeComponent;
  let fixture: ComponentFixture<TvshowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
