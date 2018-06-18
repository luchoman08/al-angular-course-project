import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieResolver } from './movie-detail/movie-detail-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AuthService } from '@app/core';
import { SharedModule } from '@app/shared/shared.module';
import { CreditsModule } from '@app/credits/credits.module';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MovieFullCreditsComponent } from './movie-full-credits/movie-full-credits.component';
import { MovieMiniDetailSummaryComponent } from './movie-mini-detail-summary/movie-mini-detail-summary.component';
import { MovieFullCreditsResolver } from '@app/movie/movie-full-credits/movie-full-credits-resolver.service';
import { MoviesListTableComponent } from './movies-list-table/movies-list-table.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesPopularListComponent } from './movies-popular-list/movies-popular-list.component';
import { MovieInTheatresListComponent } from './movie-in-theatres-list/movie-in-theatres-list.component';
import { MovieTopRatedListComponent } from './movie-top-rated-list/movie-top-rated-list.component';
@NgModule({
  imports: [
    SharedModule,
    CreditsModule,
    MovieRoutingModule
  ],
  providers: [
    MovieResolver,
    MovieFullCreditsResolver,
    AuthService
  ],
  declarations: [
    MovieDetailComponent,
    MoviesHomeComponent,
    MovieFullCreditsComponent,
    MovieMiniDetailSummaryComponent,
    MoviesListTableComponent,
    MovieSearchComponent,
    MoviesPopularListComponent,
    MovieInTheatresListComponent,
    MovieTopRatedListComponent
   ],
  exports: [MovieDetailComponent],
  bootstrap: []
})
export class MovieModule { }
