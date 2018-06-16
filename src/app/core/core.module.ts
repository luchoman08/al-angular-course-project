import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiKeyInterceptor, LanguageInterceptor } from './interceptors';

import {
  MovieService,
  PeopleService,
  CreditsService,
  ApiService,
  JwtService,
  SearchService,
  ApiImagesService,
  GalleryImagesService,
  AssetsService,
  FactoriesService
} from './services';

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
    MovieService,
    PeopleService,
    SearchService,
    CreditsService,
    ApiImagesService,
    AssetsService,
    GalleryImagesService,
    JwtService
  ],
  declarations: []
})
export class CoreModule { }
