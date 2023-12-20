import { Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { GenreService } from '@app/core/services/genre.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Genre } from '@app/core/models';
@Injectable()
export class GenreResolver  {
  constructor(
    private genreService: GenreService,
    private router: Router
  ) { }
  /**
   * Resolve genre from param `id` extracted from current activated route
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<any>}
   * @memberof GenreResolver
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let genreId: number = Number(route.params['id']);
    return this.genreService.get( genreId )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}