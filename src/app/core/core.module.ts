import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors';

import {
    MovieService, PeopleService, TVSeriesCacheService
} from './services';
import { ApiService } from './services';
import { JwtService } from '@app/core/services/jwt.service';
import { ImageService } from '@app/core/services/image.service';
import { ApiImagesService } from './services/shared/apiImages.service';
import { SearchService } from '@app/core/services/search.service';
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
    ImageService,
    SearchService,
    ApiImagesService,
    TVSeriesCacheService,
    JwtService
  ],
  declarations: []
})
export class CoreModule { }
