import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { TvShowResolver } from './tvshow-detail/tvshow-detail-resolver.service';

const routes: Routes = [
  {
    path: ':id',
    component: TvshowDetailComponent,
    resolve: {
      tvShow: TvShowResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowRoutingModule { }
