import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxGalleryModule } from 'ngx-gallery';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe,
  SortMediaPipe
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
    SortMediaPipe,
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
    PerfectScrollbarModule,
    FormsModule
  ],
  providers: [
    ImageURLPipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    FirstWordPipe,
    CapitalizePipe
  ],
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
    SortMediaPipe,

    NavbarComponent,
    FooterComponent,

    SearchInputComponent,

    MoviesGalleryComponent,
    MovieMiniDetailComponent
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
