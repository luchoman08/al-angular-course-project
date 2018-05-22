import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [MovieDetailComponent]
})
export class MovieModule { }
