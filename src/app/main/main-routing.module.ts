import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';

const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
