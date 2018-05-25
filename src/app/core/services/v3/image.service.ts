import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/v3';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { ApiImagesService } from '../shared/apiImages.service';
@Injectable()
export class ImageService {
  constructor (
    private apiImageService: ApiImagesService
  ) {}

  get(path: string,
    size: string
    ): Observable<Person> {
        return this.apiImageService.get(`${size}/${path}`)
        .pipe(map(data => data));
  }
}
