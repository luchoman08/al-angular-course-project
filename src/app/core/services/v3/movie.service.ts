import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/v3';
import { ApiService } from '../shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { paramsAppendToResponse } from '../shared/shared-functions';
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

