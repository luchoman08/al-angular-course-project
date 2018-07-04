import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ResultsInterface } from '@app/core/models';
@Injectable()
export class ApiService {
  protected api_url = environment.apiTMDBURL_V3;
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return new Observable(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
  
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

    /**
   * Support get movies results from a multiple page format, with optional initial `HttParams` 
   *
   * @private
   * @param {string} url
   * @param {number} [page]
   * @param {HttpParams} [paramsInput] initial params to be cloned and extended
   * @returns {Observable<ResultsInterface<Interface>>}
   * @memberof MovieService
   */
  getResultsMultiplePage<Interface>(url: string, page?: number, paramsInput?: HttpParams): Observable<ResultsInterface<Interface>> {
    let pageNormalized = page + 1;
    let params: HttpParams;
    if (!paramsInput && pageNormalized) {
      params = new HttpParams().set('page', String(pageNormalized));
    }
    if (paramsInput && !pageNormalized) {
      params = new HttpParams({ fromString: paramsInput.toString() })
    }
    if (paramsInput && pageNormalized) {
      params = new HttpParams({ fromString: paramsInput.toString() }).set('page', String(pageNormalized));
    }
    return this.get(url, params);
  }
}

