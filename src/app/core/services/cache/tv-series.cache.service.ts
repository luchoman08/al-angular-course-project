import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
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

