import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, paramsAppendToResponse } from './shared';


import { map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Results } from '@app/core/';
import {
  PersonCreditsCombinedModel,
  Person,
  PersonInterface,
  PersonAppendToResponseOptions
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
  get(id: string | Number, options?: PersonAppendToResponseOptions
    ): Observable<Person> {
      if ( options ) {
      const append_to_response = new Array<string>();
      options.videos ? append_to_response.push('videos') : null;
      options.images ? append_to_response.push('images') : null;
      options.movie_credits ? append_to_response.push('movie_credits') : null;
      options.tv_credits ? append_to_response.push('tv_credits') : null;
      const params = paramsAppendToResponse(append_to_response);
      return this.apiService.get('/person/' + id, params);
      } else {
        return this.apiService.get('/person/' + id);
      }

  }
  getCreditsCombined(personId: number|string): Observable<PersonCreditsCombinedModel> {
    return this.apiService.get(`/person/${personId}/combined_credits`)
    .pipe(map(data => { console.log(data); return data; }));
  }
  private getResultsMultiplePage(url: string, page?: number): Observable<Results<Person>> {
    if (page) {
      const params = new HttpParams().set('page', String(page));
      return this.apiService.get(url, params)
      .pipe( map ((data: Results<Person>) => data));
    } else {
    return this.apiService.get(url)
    .pipe( map ((data: Results<Person>) => data));
    }
  }
  getPopular(page?: number): Observable<Person[]> {
    return this.getResultsMultiplePage(`/person/popular`, page)
    .pipe(
      map(
        (results: Results<Person>) =>
          results.results ));
  }
}
