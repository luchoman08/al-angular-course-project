import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '@app/core/models';
import { ApiService } from './shared';


import { map } from 'rxjs/operators';
import { paramsAppendToResponse } from '@app/core/services/shared';
import { Results } from '../models/results.model';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class MovieService {
  constructor (
    private apiService: ApiService
  ) {}

  private getResultsMultiplePage(url: string, page?: number): Observable<Results<Movie>>{
    if (page) {
      const params = new HttpParams().set('page', String(page));
      return this.apiService.get(url, params)
      .pipe( map ((data: Results<Movie>) => data));
    } else {
    return this.apiService.get(url)
    .pipe( map ((data: Results<Movie>) => data));
    }
  }

  get(id,
      videos: Boolean = false,
      images: Boolean = false,
      keywords: Boolean = false
    ): Observable<Movie> {
      const append_to_response = new Array<string>();
      videos? append_to_response.push('videos'): null;
      images? append_to_response.push('images'): null;
      keywords? append_to_response.push('keywords'): null;
      const params = paramsAppendToResponse(append_to_response);
      if( append_to_response.length > 0 ) {
        return this.apiService.get('/movie/' + id, params);
      } else {
        return this.apiService.get('/movie/' + id);
      }
      
  }
  getRelated(movieId: number, page?: number): Observable<Results<Movie>> {
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

