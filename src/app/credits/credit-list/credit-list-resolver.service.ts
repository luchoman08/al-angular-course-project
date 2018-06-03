import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieService, CreditsService } from '@app/core/services/';
import { CreditsModel } from '@app/core/models/';
import { catchError } from 'rxjs/operators/catchError';


@Injectable()
export class CreditsResolver implements Resolve<CreditsModel> {
  constructor(
    private creditsService: CreditsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {

    return this.creditsService.getMovieCredits(route.params['movieID'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
