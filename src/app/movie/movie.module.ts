import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { AuthService } from '@app/core';
import { SharedModule } from '../shared/shared.module';
import { CreditsModule } from '@app/credits/credits.module';
@NgModule({
  imports: [
    SharedModule,
    CreditsModule,
    NgxGalleryModule,
    MovieRoutingModule
  ],
  providers: [
    MovieResolver,
    AuthService
  ],
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent],
  bootstrap: []
})
export class MovieModule { }
