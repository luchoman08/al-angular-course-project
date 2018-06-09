import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe
} from './pipes';

import {
  YoutubeVideoComponent,
  SingleDataDialogEditOrAddComponent,
  YoutubeVideoDialogComponent,
  SearchInputComponent,
} from './components';

import { MaterialModule } from './material.module';
import { NavbarComponent, FooterComponent } from './layout';


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    NavbarComponent,
    FooterComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImageURLPipe, FirstWordPipe, CapitalizePipe],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    NavbarComponent,
    FooterComponent,
    SearchInputComponent
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
