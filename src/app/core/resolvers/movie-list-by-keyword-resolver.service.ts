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

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.movieService.getByKeyword(Number(route.params['id']) )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}