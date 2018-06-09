import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { RouterModule } from '@angular/router';
import {  } from '@app/shared/pipes';
import { FormsModule } from '@angular/forms';
import {
  YoutubeVideoComponent,
  SingleDataDialogEditOrAddComponent,
  YoutubeVideoDialogComponent,
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe
} from '@app/shared/';


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [ImageURLPipe, FirstWordPipe, CapitalizePipe],
  exports: [
    CommonModule,
    MaterialModule,

    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
