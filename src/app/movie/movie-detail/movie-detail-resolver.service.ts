import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
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
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.movieService.get(route.params['id'], true, true)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
