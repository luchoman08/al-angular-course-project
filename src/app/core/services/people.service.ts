import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, paramsAppendToResponse } from './shared';


import { map } from 'rxjs/operators';
import {
  PersonCreditsCombinedModel,
  Person,
  PersonInterface
} from '@app/core/models';

@Injectable()
export class PeopleService {
  constructor (
    private apiService: ApiService
  ) {}
  /**
   * Make a person model object from json with structure in person interface
   *
   * @private
   * @param { PersonInterface } json
   * @returns { Person } person
   * @memberof PeopleService
   */
  public static makeFromJSON(json: PersonInterface): Person {
    const tvShow = Object.create(Person.prototype);
    return Object.assign(tvShow, json);
  }
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

