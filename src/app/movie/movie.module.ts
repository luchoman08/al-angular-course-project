import { NgModule } from "@angular/core";
import { MovieRoutingModule } from "@app/movie/movie-routing.module";
import { MovieDetailComponent } from "@app/movie/pages/movie-detail/movie-detail.component";
import { SharedModule } from "@app/shared/shared.module";
import { MoviesHomeComponent } from "@app/movie/pages/movies-home/movies-home.component";
import { MovieFullCreditsComponent } from "@app/movie/pages/movie-full-credits/movie-full-credits.component";
import { MovieMiniDetailSummaryComponent } from "@app/movie/components/movie-mini-detail-summary/movie-mini-detail-summary.component";
import { MoviesListTableComponent } from "@app/movie/components/movies-list-table/movies-list-table.component";
import { MovieSearchComponent } from "@app/movie/pages/movie-search/movie-search.component";
import { MoviesPopularListComponent } from "@app/movie/pages/movies-popular-list/movies-popular-list.component";
import { MovieInTheatresListComponent } from "@app/movie/pages/movie-in-theatres-list/movie-in-theatres-list.component";
import { MovieTopRatedListComponent } from "@app/movie/pages/movie-top-rated-list/movie-top-rated-list.component";
import { MovieListByGenreComponent } from "@app/movie/pages/movie-list-by-genre/movie-list-by-genre.component";
import { MovieListByKeywordComponent } from "@app/movie/pages/movie-list-by-keyword/movie-list-by-keyword.component";
import { MovieMiniDetailComponent } from "@app/movie/components/movie-mini-detail/movie-mini-detail.component";
import { MovieMiniDetailListComponent } from "@app/movie/components/movie-mini-detail-list/movie-mini-detail-list.component";
import { MovieReviewDetailComponent } from "@app/movie/components/movie-review-detail/movie-review-detail.component";
import { MovieReviewListComponent } from "@app/movie/components/movie-review-list/movie-review-list.component";
import { MovieKeywordsListComponent } from "@app/movie/components/movie-keywords-list/movie-keywords-list.component";
import { MovieGenresListComponent } from "@app/movie/components/movie-genres-list/movie-genres-list.component";
import { MovieCreditDetailComponent } from "@app/movie/components/movie-credit-detail/movie-credit-detail.component";
import { MovieCreditListComponent } from "@app/movie/components/movie-credit-list/movie-credit-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [SharedModule, MovieRoutingModule, CommonModule],
  providers: [],
  declarations: [
    MovieDetailComponent,
    MoviesHomeComponent,
    MovieFullCreditsComponent,
    MovieMiniDetailSummaryComponent,
    MoviesListTableComponent,
    MovieMiniDetailComponent,
    MovieReviewDetailComponent,
    MovieReviewListComponent,
    MovieMiniDetailListComponent,
    MovieKeywordsListComponent,
    MovieCreditDetailComponent,
    MovieCreditListComponent,
    MovieSearchComponent,
    MoviesPopularListComponent,
    MovieGenresListComponent,
    MovieInTheatresListComponent,
    MovieTopRatedListComponent,
    MovieListByGenreComponent,
    MovieListByKeywordComponent,
  ],
  exports: [MovieDetailComponent],
  bootstrap: [],
})
export class MovieModule {}
