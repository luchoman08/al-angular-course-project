import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from '@app/core/';
import { Movie } from '@app/core/';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MovieResolver implements Resolve<Movie> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    console.log('kha');
    return this.movieService.get(route.params['id'], true, true, true)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
