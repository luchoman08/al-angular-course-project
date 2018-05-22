import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/v3';
import { ApiService } from './api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id,
      videos: Boolean = false,
      images: Boolean = false
    ): Observable<Movie> {
        const params = this.paramsAppendToResponse(videos, images);
        return this.apiService.get('/movie/' + id, params)
        .pipe(map(data => data));
  }

  /**
   * Get movie and videos append to response; see https://developers.themoviedb.org/3/getting-started/append-to-response
   */
  paramsAppendToResponse(
      videos: Boolean = false, images: Boolean = false
    ): HttpParams {
    const params = new HttpParams();
    if  (videos) {
        params.set('append_to_response', String('videos'));
    }
    if (images) {
        params.set('append_to_response', String('images'));
    }
    return params;
  }
}
