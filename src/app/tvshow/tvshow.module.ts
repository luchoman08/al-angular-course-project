import { NgModule } from '@angular/core';

import { TvshowRoutingModule } from './tvshow-routing.module';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { TvShowService } from '@app/core';
import { TvShowResolver } from './tvshow-detail/tvshow-detail-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    TvshowRoutingModule
  ],
  declarations: [TvshowDetailComponent],
  providers: [
    TvShowResolver,
    TvShowService
  ]
})
export class TvShowModule { }
