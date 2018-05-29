import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoDialogComponent } from './youtube-video-dialog.component';

describe('YoutubeVideoDialogComponent', () => {
  let component: YoutubeVideoDialogComponent;
  let fixture: ComponentFixture<YoutubeVideoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeVideoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
