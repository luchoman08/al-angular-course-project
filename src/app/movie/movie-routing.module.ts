import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

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
export class MovieRoutingModule { }
