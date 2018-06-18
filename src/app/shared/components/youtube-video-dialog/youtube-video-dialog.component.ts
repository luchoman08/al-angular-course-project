import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video-dialog',
  templateUrl: './youtube-video-dialog.component.html',
  styleUrls: ['./youtube-video-dialog.component.scss']
})
export class YouTubeVideoDialogComponent implements OnInit {
  public video_keys: string[];
  public width: string;
  public urlf: string;
  public height: string;
  constructor(
    private sanitizer: DomSanitizer,
     public dialogRef: MatDialogRef<YouTubeVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {video_keys: string[], width: string, height: string}) {
      this.video_keys = data.video_keys;
      this.height = data.height;
      this.width = data.width;
     }
     onNoClick(): void {
      this.dialogRef.close();
    }
    trailersURL() {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed?rel=0&playlist=' + this.video_keys.join(','));
    }
  ngOnInit() {
  }

}
