import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieResolver
    }
  },
  {
    path: '',
    component: MoviesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
