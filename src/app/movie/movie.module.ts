import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CoreModule } from '../core/core.module';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    CoreModule
  ],
  providers: [
    MovieResolver
  ],
  declarations: [MovieDetailComponent]
})
export class MovieModule { }
