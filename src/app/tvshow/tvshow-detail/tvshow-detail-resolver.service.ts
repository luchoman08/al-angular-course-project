import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TvShowService, TVShow } from '@app/core/';
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

    return this.tvShowService.get(route.params['id'], true, true)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
