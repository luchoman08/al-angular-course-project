import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '@app/core/models';
import { ApiService } from './shared';


import { map } from 'rxjs/operators';
import { paramsAppendToResponse } from '@app/core/services/shared';
@Injectable()
export class MovieService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id,
      videos: Boolean = false,
      images: Boolean = false
    ): Observable<Movie> {
        const params = paramsAppendToResponse(videos, images);
        return this.apiService.get('/movie/' + id, params)
        .pipe(map(data => data));
  }


}

