import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors';

import {
  MovieService,
  PeopleService,
  TVSeriesCacheService,
  CreditsService,
  ApiService,
  JwtService,
  SearchService,
  ApiImagesService
} from './services';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    ApiService,
    MovieService,
    PeopleService,
    SearchService,
    CreditsService,
    ApiImagesService,
    TVSeriesCacheService,
    JwtService
  ],
  declarations: []
})
export class CoreModule { }
