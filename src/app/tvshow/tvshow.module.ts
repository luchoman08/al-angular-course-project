import { NgModule } from '@angular/core';

import { TvshowRoutingModule } from './tvshow-routing.module';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { TvShowService } from '@app/core';
import { TvShowResolver } from './tvshow-detail/tvshow-detail-resolver.service';
import { TvshowHomeComponent } from './tvshow-home/tvshow-home.component';

@NgModule({
  imports: [
    SharedModule,
    TvshowRoutingModule
  ],
  declarations: [TvshowDetailComponent, TvshowHomeComponent],
  providers: [
    TvShowResolver,
    TvShowService
  ]
})
export class TvShowModule { }
