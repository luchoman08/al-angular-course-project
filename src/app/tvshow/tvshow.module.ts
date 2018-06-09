import { NgModule } from '@angular/core';

import { TvshowRoutingModule } from './tvshow-routing.module';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TvshowRoutingModule
  ],
  declarations: [TvshowDetailComponent]
})
export class TvShowModule { }
