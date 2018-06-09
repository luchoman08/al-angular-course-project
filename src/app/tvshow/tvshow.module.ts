import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowRoutingModule } from './tvshow-routing.module';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TvshowRoutingModule
  ],
  declarations: [TvshowDetailComponent]
})
export class TvshowModule { }
