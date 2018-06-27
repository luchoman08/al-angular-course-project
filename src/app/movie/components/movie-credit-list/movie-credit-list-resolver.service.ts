import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CreditsModel, MovieService } from '@app/core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MovieCreditsResolver implements Resolve<CreditsModel> {
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {

    return this.movieService.getMovieCredits(route.params['movieID'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
