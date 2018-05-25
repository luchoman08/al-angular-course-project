import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { CoreModule } from '../core/core.module';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from '../core/services/v3/movie.service';
import { MainComponentComponent } from '../main/main-component/main-component.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { AuthService } from '../core/services/v3/auth.service';

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
