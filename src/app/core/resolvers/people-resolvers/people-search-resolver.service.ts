import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { EMPTY_SEARCH_SYMBOL, Person } from '@app/core/models';
import { ResultsInterface } from '@app/core';
import { PeopleService } from '@app/core/services';
@Injectable()
export class PeopleSearchResolver implements Resolve<ResultsInterface<Person>> {
  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}
  /**
   * Resolve movies results from a given query in route params, if query is equal to `EMPTY_SEARCH_SYMBOL`
   * return the 20 most popular movies
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<any>} popularMovies
   * @memberof PeopleSearchResolver
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let resultPopularMovies: Observable<ResultsInterface<Person>|boolean>;
    /** Query search obtained from params of activated route */
    let query: string = route.params['query'];
    /** Get predefined results for empty search, first 20 most popular people */
    if ( query === EMPTY_SEARCH_SYMBOL ) {
      resultPopularMovies = this.peopleService.getPopular()
      .pipe(map( (results: ResultsInterface<Person>) => {
        let  resultsPredefined: ResultsInterface<Person> = {
          total_pages: 1,
          total_results: 20,
          results: results.results,
          page: 0
        };
        return resultsPredefined;
      }
    ), catchError((err) => this.router.navigateByUrl('/')));
    return resultPopularMovies;
    }
    /** if is not empty query, return the search result by the given query*/
    else {
      return this.peopleService.searchPeople(query)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));  
    }
  }
}