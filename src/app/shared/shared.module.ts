import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxGalleryModule } from 'ngx-gallery';

import {
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe,
  SortMediaPipe,
  DurationPipe,
  IndefiniteArticlePipe
} from '@app/shared/pipes';

import {
  BackgroundImageDirective,
  ProfileImageDirective,
  ZoomImageDirective,
  PosterImageDirective
} from '@app/shared/directives';

import {
  SingleDataDialogEditOrAddComponent,
  YouTubeVideoDialogComponent,
  SearchInputComponent,
  FullScreenGalleryComponent
} from '@app/shared/components';

import {
  MoviesGalleryComponent
} from '@app/movie/shared';

import { MaterialModule } from '@app/shared/material.module';
import { NavbarComponent, FooterComponent } from '@app/shared/layout';



@NgModule({
  declarations: [
    /** Movie's shared components  */
    MoviesGalleryComponent,
    /** Common Components */
    SingleDataDialogEditOrAddComponent,
    YouTubeVideoDialogComponent,
    FullScreenGalleryComponent,
    SearchInputComponent,
    /** Pipes */
    CapitalizePipe,
    DurationPipe,
    FirstWordPipe,
    SortMediaPipe,
    ImageURLPipe,
    IndefiniteArticlePipe,
    /* Layout components */
    NavbarComponent,
    FooterComponent,
    /* Directives */
    BackgroundImageDirective,
    PosterImageDirective,
    ProfileImageDirective,
    ZoomImageDirective
  ],
  imports: [
    /* Common vendors */
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxGalleryModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ImageURLPipe,
    FirstWordPipe,
    CapitalizePipe
  ],
  exports: [
    /* Vendor */
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    /* Components */
    SingleDataDialogEditOrAddComponent,
    FullScreenGalleryComponent,
    YouTubeVideoDialogComponent,
    FullScreenGalleryComponent,
    SearchInputComponent,
    /** Movie's shared components  */
    MoviesGalleryComponent,
    /* Layout components */
    NavbarComponent,
    FooterComponent,
    /* Pipes */
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    SortMediaPipe,
    DurationPipe,
    IndefiniteArticlePipe,
    /* Directives */
    ProfileImageDirective,
    BackgroundImageDirective,
    PosterImageDirective,
    ZoomImageDirective
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YouTubeVideoDialogComponent]
})
export class SharedModule { }
