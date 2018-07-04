import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  Movie,
  ResultsInterface
} from '@app/core';

import { MovieService } from '@app/core/services';
@Injectable()
export class MovieListByKeywordResolver implements Resolve<ResultsInterface<Movie>> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
  /**
   * Resolve movies by keyword `id` extracted from the activated route
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<any>}
   * @memberof MovieListByKeywordResolver
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let keywordId = Number(route.params['id']);
    return this.movieService.getByKeyword( keywordId )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
