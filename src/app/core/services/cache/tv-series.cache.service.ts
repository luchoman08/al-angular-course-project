import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/v3';
import { ApiService } from '../v3/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { HttpParams, HttpClient } from '@angular/common/http';
import { paramsAppendToResponse } from '../shared/shared-functions';
@Injectable()
export class TVSeriesCacheService {
  constructor (
    private apiService: ApiService

  ) {}

  get(): Observable<any> {
        return this.apiService.getf('files.tmdb.org/p/exports/tv_series_ids_05_22_2018.json.gz' )
        .pipe(map(data => { console.log('hola'); return data; } )) ;
  }

}

