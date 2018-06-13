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
  FullScreenGalleryComponent
} from './components';

import { MaterialModule } from './material.module';
import { NavbarComponent, FooterComponent } from './layout';

import {
  MoviesGalleryComponent,
  MovieMiniDetailComponent,
  MovieMiniDetailListComponent
} from '@app/movie/shared';

import {
  ReviewDetailComponent,
  ReviewListComponent
} from '@app/social/shared';

import { KeywordsListComponent } from '@app/keywords/shared';

import { GenresListComponent } from '@app/genre/shared';

import { DurationPipe } from './pipes/duration.pipe';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { PosterImageDirective } from './directives/poster-image.directive';
import { ProfileImageDirective } from './directives/profile-image.directive';
import { IndefiniteArticlePipe } from './pipes/indefinite-article.pipe';

@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    YoutubeVideoDialogComponent,
    FullScreenGalleryComponent,

    CapitalizePipe,
    FirstWordPipe,
    SortMediaPipe,
    ImageURLPipe,

    NavbarComponent,
    FooterComponent,

    ReviewListComponent,
    ReviewDetailComponent,

    MoviesGalleryComponent,
    MovieMiniDetailComponent,
    MovieMiniDetailListComponent,

    SearchInputComponent,

    KeywordsListComponent,

    GenresListComponent,

    DurationPipe,

    BackgroundImageDirective,

    PosterImageDirective,

    ProfileImageDirective,


    IndefiniteArticlePipe
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
    FullScreenGalleryComponent,
    YoutubeVideoDialogComponent,
    FullScreenGalleryComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    SortMediaPipe,
    DurationPipe,

    BackgroundImageDirective,
    PosterImageDirective,

    NavbarComponent,
    FooterComponent,

    SearchInputComponent,

    MoviesGalleryComponent,
    MovieMiniDetailComponent,
    MovieMiniDetailListComponent,

    ReviewListComponent,
    ReviewDetailComponent,
    
    KeywordsListComponent,

    GenresListComponent,

    ProfileImageDirective,


    IndefiniteArticlePipe
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
