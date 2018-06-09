import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: TvshowDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowRoutingModule { }
