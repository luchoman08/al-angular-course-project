import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PeopleService } from '../../core/services/v3';
import { Person } from '../../core/models/v3';
import { catchError } from 'rxjs/operators/catchError';


@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.peopleService.get(route.params['id'], true, true)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
