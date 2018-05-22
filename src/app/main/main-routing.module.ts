import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from '../movie/movie-detail/movie-detail.component';
import { MovieResolver } from '../movie/movie-detail/movie-detail-resolver.service';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: '../movie/movie.module#MovieModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
