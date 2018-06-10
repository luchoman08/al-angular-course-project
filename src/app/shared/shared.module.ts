import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxGalleryModule } from 'ngx-gallery';

import {
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe
} from './pipes';

import {
  SingleDataDialogEditOrAddComponent,
  YoutubeVideoDialogComponent,
  SearchInputComponent,
} from './components';

import { MaterialModule } from './material.module';
import { NavbarComponent, FooterComponent } from './layout';
import {
  MoviesGalleryComponent,
  MovieMiniDetailComponent
} from '@app/movie/shared';


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    NavbarComponent,
    FooterComponent,

    MoviesGalleryComponent,
    MovieMiniDetailComponent,

    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxGalleryModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImageURLPipe, FirstWordPipe, CapitalizePipe],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,

    NgxGalleryModule,

    SingleDataDialogEditOrAddComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,

    NavbarComponent,
    FooterComponent,

    SearchInputComponent,

    MoviesGalleryComponent,
    MovieMiniDetailComponent
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
