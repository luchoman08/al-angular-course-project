import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '@app/core/models/';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { ApiImagesService } from '@app/core/services/shared/apiImages.service';
import { environment } from '@env/environment';
@Injectable()
export class ImageService {
  api_url: string;
  constructor (
  ) {
    this.api_url  = environment.imagesTMDB_URL;
  }

  get(path: string,
    size: string
    ): string {
        return `${this.api_url}/${size}${path}`;
  }
}
