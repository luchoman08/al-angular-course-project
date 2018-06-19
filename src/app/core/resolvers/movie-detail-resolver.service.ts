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
    return this.movieService.get(route.params['id'], options)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
