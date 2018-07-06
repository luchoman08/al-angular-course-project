import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiKeyInterceptor, LanguageInterceptor } from '@app/core/interceptors';

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
import { PeopleSearchResolver } from '@app/core/resolvers/people-resolvers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    /** Interceptors */
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    /** Services */
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
    /** Resolvers */
    MovieResolver,
    MovieListByGenreResolver,
    MovieListByKeywordResolver,
    MovieFullCreditsResolver,
    MovieSearchResolver,
    PeopleSearchResolver,
    GenreResolver,
    KeywordResolver
  ],
  declarations: []
})
export class CoreModule { }
