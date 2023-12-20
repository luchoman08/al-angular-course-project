import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Movie, EMPTY_SEARCH_SYMBOL } from '@app/core/models';
import { ResultsInterface } from '@app/core';
import { MovieService } from '@app/core/services';
@Injectable()
export class MovieSearchResolver  {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
  /**
   * Resolve movies results from a given query in route params, if query is equal to `EMPTY_SEARCH_SYMBOL`
   * return the 20 most popular movies
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<any>} popularMovies
   * @memberof MovieSearchResolver
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let resultPopularMovies: Observable<ResultsInterface<Movie>|boolean>;
    /** Query search obtained from params of activated route */
    let query: string = route.params['query'];
    /** Get predefined results for empty search, first 20 most popular movies */
    if ( query === EMPTY_SEARCH_SYMBOL ) {
      resultPopularMovies = this.movieService.getPopular()
      .pipe(map( (results: ResultsInterface<Movie>) => {
        let  resultsPredefined: ResultsInterface<Movie> = {
          total_pages: 1,
          total_results: 20,
          results: results.results,
          page: 1
        };
        return resultsPredefined;
      }
    ), catchError((err) => this.router.navigateByUrl('/')));
    return resultPopularMovies;
    }
    /** if is not empty query, return the search result by the given query*/
    else {
      return this.movieService.searchMovies(query)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));  
    }
  }
}