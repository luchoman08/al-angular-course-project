import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './shared/api.service';
import { paramsAppendToResponseMoviesAndTv } from './shared/shared-functions';
import { TVShow, TvShowInterface, MovieAppendToResponseOptions } from '@app/core/models';

@Injectable({
  providedIn: 'root'
})

export class TvShowService {

  /**
   * Get object with structure of tvshow interface and return new tvshow model constructed with the info from given object
   *
   * @static
   * @param {TvShowInterface} json
   * @returns {TVShow}
   * @memberof TvShowService
   */
  public static makeFromJSON(json: TvShowInterface): TVShow {
    const person = Object.create(TVShow.prototype);
    return Object.assign(person, json);
  }
  constructor(private apiService: ApiService) { }
  get(id, options?: MovieAppendToResponseOptions
  ): Observable<TvShowService> {
    if (options) {
    const params = paramsAppendToResponseMoviesAndTv(options);
      return this.apiService.get('/tv/' + id, params);
    } else {
      return this.apiService.get('/tv/' + id);
    }
}
}
