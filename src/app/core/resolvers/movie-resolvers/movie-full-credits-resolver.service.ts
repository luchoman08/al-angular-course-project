import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MovieService } from '@app/core/services';
import { MovieAppendToResponseOptions, Movie, ResultsInterface } from '@app/core/models';


@Injectable()
export class MovieFullCreditsResolver  {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
/**
 * Resolve a movie with all credits added, get movie  by `id` param in activated route
 *
 * @param {ActivatedRouteSnapshot} route
 * @returns {Observable<Movie>}
 * @memberof MovieFullCreditsResolver
 */
resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const options: MovieAppendToResponseOptions = {
      credits: true
    };
    let movieId = Number(route.params['id']);
    return this.movieService.get( movieId, options )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}