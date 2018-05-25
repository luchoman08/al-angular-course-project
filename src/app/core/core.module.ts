import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors';

import {
    MovieService
} from './services/v3';
import { TVSeriesCacheService } from './services/cache/tv-series.cache.service';
import { ApiService } from './services';
import { JwtService } from './services/v3/jwt.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    ApiService,
    MovieService,
    TVSeriesCacheService,
    JwtService
  ],
  declarations: []
})
export class CoreModule { }