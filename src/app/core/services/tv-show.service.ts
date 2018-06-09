import { Injectable } from '@angular/core';
import { ApiService } from './shared/api.service';
import { TVShow } from '@app/core/';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { paramsAppendToResponse } from './shared/shared-functions';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

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
