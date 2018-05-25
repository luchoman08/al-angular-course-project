import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { AuthService, MovieService, CoreModule } from '@app/core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NgxGalleryModule,
    MovieRoutingModule
  ],
  providers: [
    MovieResolver,
    MovieService,
    AuthService
  ],
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent],
  bootstrap: []
})
export class MovieModule { }
