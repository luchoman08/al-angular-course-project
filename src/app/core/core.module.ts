import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiKeyInterceptor, LanguageInterceptor } from './interceptors';

import {
  MovieService,
  PeopleService,
  ApiService,
  JwtService,
  SearchService,
  ApiImagesService,
  GalleryImagesService,
  AssetsService,
  FactoriesService,
  GenreService,
} from '@app/core/services';
import {
  MovieListByGenreResolver,
  MovieListByKeywordResolver,
  GenreResolver,
  KeywordResolver,
  MovieResolver,
  MovieFullCreditsResolver,
  MovieSearchResolver
} from '@app/core/resolvers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    ApiService,
    FactoriesService,
    GenreService,
    MovieService,
    PeopleService,
    SearchService,
    ApiImagesService,
    AssetsService,
    GalleryImagesService,
    JwtService,

    MovieResolver,
    MovieListByGenreResolver,
    MovieListByKeywordResolver,
    MovieFullCreditsResolver,
    MovieSearchResolver,
    GenreResolver,
    KeywordResolver
  ],
  declarations: []
})
export class CoreModule { }
