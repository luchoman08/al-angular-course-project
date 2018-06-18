import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, paramsAppendToResponsePeople } from './shared';


import { map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ResultsInterface } from '@app/core/';
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
      const params = paramsAppendToResponsePeople(options);
      return this.apiService.get('/person/' + id, params);
      } else {
        return this.apiService.get('/person/' + id);
      }

  }
  getCreditsCombined(personId: number|string): Observable<PersonCreditsCombinedModel> {
    return this.apiService.get(`/person/${personId}/combined_credits`)
    .pipe(map(data => { console.log(data); return data; }));
  }
  private getResultsMultiplePage(url: string, page?: number): Observable<ResultsInterface<Person>> {
    if (page) {
      const params = new HttpParams().set('page', String(page));
      return this.apiService.get(url, params)
      .pipe( map ((data: ResultsInterface<Person>) => data));
    } else {
    return this.apiService.get(url)
    .pipe( map ((data: ResultsInterface<Person>) => data));
    }
  }
  getPopular(page?: number): Observable<Person[]> {
    return this.getResultsMultiplePage(`/person/popular`, page)
    .pipe(
      map(
        (results: ResultsInterface<Person>) =>
          results.results ));
  }
}
