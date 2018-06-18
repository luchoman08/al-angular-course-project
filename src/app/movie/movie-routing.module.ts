import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MovieFullCreditsComponent } from './movie-full-credits/movie-full-credits.component';
import { MovieFullCreditsResolver } from '@app/movie/movie-full-credits/movie-full-credits-resolver.service';
import { MovieSearchComponent } from '@app/movie/movie-search/movie-search.component';
import { MoviesPopularListComponent } from '@app/movie/movies-popular-list/movies-popular-list.component';
import { MovieInTheatresListComponent } from '@app/movie/movie-in-theatres-list/movie-in-theatres-list.component';
import { MovieTopRatedListComponent } from '@app/movie/movie-top-rated-list/movie-top-rated-list.component';
const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieResolver
    },
  },
  {
    path: 'in_theatres/list',
    component: MovieInTheatresListComponent
  },
  {
    path: 'top_rated/list',
    component: MovieTopRatedListComponent
  },
  {
    path: 'popular/list',
    component: MoviesPopularListComponent
  },
  {
    path: ':id/credits',
    component: MovieFullCreditsComponent,
    resolve: {
      movie: MovieFullCreditsResolver
    }
  },
  {
    path: '',
    component: MoviesHomeComponent
  },
  {
    path: 'search/table',
    component: MovieSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
