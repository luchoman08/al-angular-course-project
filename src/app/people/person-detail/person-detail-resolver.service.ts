import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PeopleService, Person } from '@app/core/';
import { catchError } from 'rxjs/operators/catchError';


@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {

    return this.peopleService.get(route.params['id'], true, true)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
