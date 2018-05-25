import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/v3';
import { ApiService } from '../shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { paramsAppendToResponse } from '../shared/shared-functions';
@Injectable()
export class PeopleService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id,
      videos: Boolean = false,
      images: Boolean = false
    ): Observable<Person> {
        const params = paramsAppendToResponse(videos, images);
        return this.apiService.get('/person/' + id, params)
        .pipe(map(data => data));
  }

 
}

