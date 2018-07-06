import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService, paramsAppendToResponsePeople } from '@app/core/services/shared';


import { map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ResultsInterface } from '@app/core';
import {
  PersonCreditsCombinedModel,
  Person,
  PersonInterface,
  PersonAppendToResponseOptions
} from '@app/core/models';
import { FactoriesService } from '@app/core/services/factories.service';

@Injectable()
export class PeopleService {
  constructor (
    private apiService: ApiService,
    private factoriesService: FactoriesService
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
    return this.apiService.get(`/person/${personId}/combined_credits`);
  }

  private getPeopleResultsMultiplePage(url: string, page = 1, paramsInput = new HttpParams()): Observable<ResultsInterface<Person>> {
    return this.apiService.getResultsMultiplePage<PersonInterface>(url, page, paramsInput);
    /** To do, return people from factory */
  }
  getPopular(page?: number): Observable<ResultsInterface<Person>> {
    return this.getPeopleResultsMultiplePage(`/person/popular`, page)
  }
  searchPeople(query: string, page = 0): Observable<ResultsInterface<Person>>{
    if( query  === '' ) {
      return this.getPopular();
    } else {
    const params = new HttpParams().set('query', query);
    return this.getPeopleResultsMultiplePage('/search/person' , page, params );
    }
  }
}
