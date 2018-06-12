import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { TvShowResolver } from './tvshow-detail/tvshow-detail-resolver.service';
import { TvshowHomeComponent } from './tvshow-home/tvshow-home.component';

const routes: Routes = [
  {
    path: ':id',
    component: TvshowDetailComponent,
    resolve: {
      tvShow: TvShowResolver
    }
  },
  {
    path: '',
    component: TvshowHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowRoutingModule { }
