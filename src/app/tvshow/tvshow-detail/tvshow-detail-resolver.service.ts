import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TvShowService, TVShow, MovieAppendToResponseOptions } from '@app/core/';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TvShowResolver implements Resolve<TVShow> {
  constructor(
    private tvShowService: TvShowService,
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
    return this.tvShowService.get(route.params['id'], options)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
