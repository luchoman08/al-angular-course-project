import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './shared/api.service';
import { paramsAppendToResponse } from './shared/shared-functions';
import { TVShow, TvShowInterface } from '@app/core/models';

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
  get(id,
    videos: Boolean = false,
    images: Boolean = false
  ): Observable<TvShowService> {
      const params = paramsAppendToResponse(videos, images);
      return this.apiService.get('/tv/' + id, params)
      .pipe(map(data => data));
}
}
