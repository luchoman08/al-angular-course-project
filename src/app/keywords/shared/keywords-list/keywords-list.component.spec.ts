import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsListComponent } from './keywords-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('KeywordsListComponent', () => {
  let component: KeywordsListComponent;
  let fixture: ComponentFixture<KeywordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsListComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
