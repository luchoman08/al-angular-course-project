import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ResultsInterface, Movie} from '@app/core/';
import { KeywordService } from '../services';
@Injectable()
export class KeywordResolver implements Resolve<ResultsInterface<Movie>> {
  constructor(
    private keywordService: KeywordService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.keywordService.get(route.params['id'] )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}