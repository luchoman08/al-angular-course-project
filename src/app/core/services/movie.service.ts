import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Results } from '../models/results.model';
import { Movie } from '@app/core/models';
import { ApiService } from './shared';
import { paramsAppendToResponse } from './shared';
import { MovieAppendToResponseOptions } from '@app/core/models';
@Injectable()
export class MovieService {
  constructor(
    private apiService: ApiService
  ) { }

  private getResultsMultiplePage(url: string, page?: number): Observable<Results<Movie>> {
    if (page) {
      const params = new HttpParams().set('page', String(page));
      return this.apiService.get(url, params)
        .pipe(map((data: Results<Movie>) => data));
    } else {
      return this.apiService.get(url)
        .pipe(map((data: Results<Movie>) => data));
    }
  }

  get(id: string | number, options?: MovieAppendToResponseOptions): Observable<Movie> {
    if (options) {
      const append_to_response = new Array<string>();
      options.videos ? append_to_response.push('videos') : null;
      options.images ? append_to_response.push('images') : null;
      options.keywords ? append_to_response.push('keywords') : null;
      options.credits ? append_to_response.push('credits') : null;
      options.reviews ? append_to_response.push('reviews') : null;
      options.similar ? append_to_response.push('similar') : null;
      const params = paramsAppendToResponse(append_to_response);
      if (append_to_response.length > 0) {
        return this.apiService.get('/movie/' + id, params);
      }
    } else {
      return this.apiService.get('/movie/' + id);
    }
  }
  getSimilar(movieId: number, page?: number): Observable<Results<Movie>> {
    return this.getResultsMultiplePage(`/movie/${movieId}/similar`, page);
  }
  getPopular(page?: number): Observable<Results<Movie>> {
    return this.getResultsMultiplePage('/movie/popular', page);
  }
  getInTheatres(page?: number): Observable<Results<Movie>> {
    return this.getResultsMultiplePage('/movie/now_playing', page);
  }
  getTopRated(page?: number): Observable<Results<Movie>> {
    return this.getResultsMultiplePage('/movie/top_rated', page);
  }

}

