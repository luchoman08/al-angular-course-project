import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CreditsService } from '@app/core/';
import { CreditsModel } from '@app/core/';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MovieCreditsResolver implements Resolve<CreditsModel> {
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
