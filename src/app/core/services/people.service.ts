import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService, paramsAppendToResponse } from './shared';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { PersonCreditsCombinedModel, Person } from '@app/core/models';
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
  getCreditsCombined(personId: number|string): Observable<PersonCreditsCombinedModel>{
    return this.apiService.get(`/person/${personId}/combined_credits`)
    .pipe(map(data => { console.log(data); return data; }));
  }


}

