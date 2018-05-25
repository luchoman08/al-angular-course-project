import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/v3';
import { ApiService } from '../shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { paramsAppendToResponse } from '../shared/shared-functions';
@Injectable()
export class ImageService {
  constructor (
  ) {}

  getBySize(path: string,
    size: string
    ): Observable<Person> {
        const params = paramsAppendToResponse(videos, images);
        return this.apiService.get('/person/' + id, params)
        .pipe(map(data => data));
  }

 
}