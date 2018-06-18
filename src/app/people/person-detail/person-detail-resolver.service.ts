import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PeopleService, Person, PersonAppendToResponseOptions } from '@app/core/';
import { catchError } from 'rxjs/operators';


@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const options: PersonAppendToResponseOptions = {
      images: true,
      videos: true,
      movie_credits: true,
      tv_credits: true
    };
    return this.peopleService.get(route.params['id'], options)
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
