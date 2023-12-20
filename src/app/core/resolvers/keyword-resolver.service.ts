import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ResultsInterface, Movie} from '@app/core';
import { KeywordService } from '@app/core/services';
import { KeywordsInterface } from '@app/core/models';
@Injectable()
export class KeywordResolver  {
  constructor(
    private keywordService: KeywordService,
    private router: Router
  ) {}
/**
 *  Resolve keyword from param `id` extracted from current activated route
 *
 * @param {ActivatedRouteSnapshot} route
 * @returns {Observable<KeywordsInterface>}
 * @memberof KeywordResolver
 */
resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let keywordId = route.params['id'];
    return this.keywordService.get( keywordId )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}