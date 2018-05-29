import { NgModule } from '@angular/core';
import {
    SingleDataDialogEditOrAddComponent
} from '@app/shared/common-components';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { RouterModule } from '@angular/router';
import { CapitalizePipe, FirstWordPipe } from '@app/shared/pipes';
import { FormsModule } from '@angular/forms';
import { YoutubeVideoComponent } from '@app/shared/common-components';
import { YoutubeVideoDialogComponent } from './common-components/youtube-video-dialog/youtube-video-dialog.component';


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    CapitalizePipe,
    FirstWordPipe,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    SingleDataDialogEditOrAddComponent,
    CapitalizePipe,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    FirstWordPipe
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
