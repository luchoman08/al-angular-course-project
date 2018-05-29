import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-youtube-video-dialog',
  templateUrl: './youtube-video-dialog.component.html',
  styleUrls: ['./youtube-video-dialog.component.scss']
})
export class YoutubeVideoDialogComponent implements OnInit {
  public video_keys: string[];
  public width: string;
  public height: string;
  constructor( public dialogRef: MatDialogRef<YoutubeVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {video_keys: string[], width: string, height: string}) {
      this.video_keys = data.video_keys;
      this.height = data.height;
      this.width = data.width;
     }
     onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
