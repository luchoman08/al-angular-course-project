import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '@app/core/models';
import { ApiService } from '@app/core/services/shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { paramsAppendToResponse } from '@app/core/services/shared/shared-functions';
import { PersonCreditsCombinedModel } from '@app/people/models/person-credits-combined.model';
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

