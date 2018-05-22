import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MovieDetailComponent
  ],
  providers : [
    MovieResolver
  ]
})
/**
 * This module contains all principal and page-complete components of the page
 * like login pages or home pages
 */
export class MainModule { }
