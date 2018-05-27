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


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    CapitalizePipe,
    FirstWordPipe,
    YoutubeVideoComponent
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
    FirstWordPipe
  ]
})
export class SharedModule { }
