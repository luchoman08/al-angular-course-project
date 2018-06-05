import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreditsCombinedDetailComponent } from './person-credits-combined-detail.component';

describe('PersonCreditsCombinedDetailComponent', () => {
  let component: PersonCreditsCombinedDetailComponent;
  let fixture: ComponentFixture<PersonCreditsCombinedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreditsCombinedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreditsCombinedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
