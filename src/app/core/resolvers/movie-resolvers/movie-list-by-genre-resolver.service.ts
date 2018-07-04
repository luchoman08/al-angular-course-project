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
export class MovieListByGenreResolver implements Resolve<ResultsInterface<Movie>> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
/**
 * Resolve movies result by genre indicated by `id` param in router, this id is the `genre id`
 *
 * @param {ActivatedRouteSnapshot} route
 * @returns {Observable<ResultsInterface<Movie>>}
 * @memberof MovieListByGenreResolver
 */
resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any>{
    let genreId = Number(route.params['id']);
    return this.movieService.getByGenre( genreId )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
