import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreditsCombinedComponent } from './person-credits-combined.component';

describe('PersonCreditsCombinedComponent', () => {
  let component: PersonCreditsCombinedComponent;
  let fixture: ComponentFixture<PersonCreditsCombinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreditsCombinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreditsCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
