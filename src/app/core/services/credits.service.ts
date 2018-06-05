import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '@app/core/services/shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { Cast, Crew } from '@app/core/';
@Injectable()
export class CreditsService {
  constructor (
    private apiService: ApiService
  ) {}

  getMovieCredits(idMovie: string|number): Observable<{id: string, cast: Cast[], crew: Crew[]}> {
        return this.apiService.get(`/movie/${idMovie}/credits`)
        .pipe(map(data => data));
  }


}
