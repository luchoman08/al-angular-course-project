import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeVideoDialogComponent } from './youtube-video-dialog.component';

describe('YouTubeVideoDialogComponent', () => {
  let component: YouTubeVideoDialogComponent;
  let fixture: ComponentFixture<YouTubeVideoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeVideoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
