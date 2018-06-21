import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MovieService } from '@app/core/services';
import { Movie, MovieAppendToResponseOptions } from '@app/core/models';



@Injectable()
export class MovieResolver implements Resolve<Movie> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
/**
 * Resolve movie for movie detail page, with `videos, images keywords, credits, reviews and similar` 
 * added using append to response, the movie id is given by `id` param in activated route
 * 
 * @param {ActivatedRouteSnapshot} route
 * @returns {Observable<Movie>}
 * @memberof MovieResolver
 */
resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const options: MovieAppendToResponseOptions = {
      videos : true,
      images: true,
      keywords: true,
      credits: true,
      reviews: true,
      similar: true
    };
    let movieId = Number(route.params['id']);
    return this.movieService.get( movieId, options )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
