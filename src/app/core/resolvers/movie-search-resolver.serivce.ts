import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Movie, EMPTY_SEARCH_SYMBOL } from '@app/core/models';
import { ResultsInterface } from '@app/core';
import { MovieService } from '@app/core/services';
@Injectable()
export class MovieSearchResolver implements Resolve<ResultsInterface<Movie>> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    if (route.params['query'] === EMPTY_SEARCH_SYMBOL ) {
      return this.movieService.getPopular()
      .pipe(map( (results: ResultsInterface<Movie>) => {
        let  resultsPredefined: ResultsInterface<Movie> = {
          total_pages: 20,
          total_results: 20,
          results: results.results,
          page: 0
        };
        return resultsPredefined;
      }
    ), catchError((err) => this.router.navigateByUrl('/')));

    } else {
      return this.movieService.searchMovies(route.params['query'] )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));  
    }
  }
}