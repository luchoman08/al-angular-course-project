import { Observable } from 'rxjs';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GenreService } from '@app/core/services/genre.service';
import { ResultsInterface } from '@app/core';
import { Movie } from '@app/core';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
@Injectable()
export class GenreResolver implements Resolve<ResultsInterface<Movie>> {
  constructor(
    private genreService: GenreService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.genreService.get(route.params['id'] )
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}