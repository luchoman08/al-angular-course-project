import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreditsCombinedListComponent } from '@app/credits/person-credits-combined-list/person-credits-combined.component-list';

describe('PersonCreditsCombinedListComponent', () => {
  let component: PersonCreditsCombinedListComponent;
  let fixture: ComponentFixture<PersonCreditsCombinedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreditsCombinedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreditsCombinedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
