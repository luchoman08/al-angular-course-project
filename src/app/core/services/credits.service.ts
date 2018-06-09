import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './shared';


import { map } from 'rxjs/operators';
import { Cast, Crew } from '@app/core/models';
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
