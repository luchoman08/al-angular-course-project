import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from '@app/movie/pages/movie-detail/movie-detail.component';
import { MovieResolver } from '@app/core/resolvers/movie-resolvers/movie-detail-resolver.service';
import { MoviesHomeComponent } from '@app/movie/pages/movies-home/movies-home.component';
import { MovieFullCreditsComponent } from '@app/movie/pages/movie-full-credits/movie-full-credits.component';
import { MovieFullCreditsResolver } from '@app/core/resolvers/movie-resolvers/movie-full-credits-resolver.service';
import { MovieSearchComponent } from '@app/movie/pages/movie-search/movie-search.component';
import { MoviesPopularListComponent } from '@app/movie/pages/movies-popular-list/movies-popular-list.component';
import { MovieInTheatresListComponent } from '@app/movie/pages/movie-in-theatres-list/movie-in-theatres-list.component';
import { MovieTopRatedListComponent } from '@app/movie/pages/movie-top-rated-list/movie-top-rated-list.component';
import { MovieListByGenreComponent } from '@app/movie/pages/movie-list-by-genre/movie-list-by-genre.component';
import { MovieListByGenreResolver } from '@app/core/resolvers/movie-resolvers/movie-list-by-genre-resolver.service';
import { GenreResolver } from '@app/core/resolvers/genre-resolver.serivce';
import { MovieListByKeywordComponent } from '@app/movie/pages/movie-list-by-keyword/movie-list-by-keyword.component';
import { KeywordResolver, MovieListByKeywordResolver } from '@app/core';
import { MovieSearchResolver } from '@app/core/resolvers/movie-resolvers/movie-search-resolver.serivce';
const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent,
    pathMatch: 'full',
    resolve: {
      movie: MovieResolver
    },
  },
  {
    path: 'genres/:id',
    component: MovieListByGenreComponent,
    resolve : {
      genre: GenreResolver,
      movies: MovieListByGenreResolver
    }
  },
  {
    path: 'keywords/:id',
    component: MovieListByKeywordComponent,
    resolve : {
      keyword: KeywordResolver,
      movies: MovieListByKeywordResolver
    }
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
    path: 'search/:query',
    component: MovieSearchComponent,
    resolve: {
      moviesResult: MovieSearchResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
