import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

import {
  ImageSizeValueModel,
  MediaTypeEnum
} from '@app/core/models';


@Pipe({
  name: 'imageURL'
})
export class ImageURLPipe implements PipeTransform {
    api_url  = environment.imagesTMDB_URL;
    transform(path: string, size: ImageSizeValueModel, mediaType: MediaTypeEnum): string  {
      if ( path && path != '' ) {
        return `${this.api_url}/${size.name}${path}`;
      } else if ( mediaType ) {
        switch ( mediaType ) {
          case MediaTypeEnum.MOVIE: {
            return './assets/img/posters/poster_default.png';
          }
          case MediaTypeEnum.PERSON: {
            return './assets/img/people/default-profile-men.png';
          }
        }
      }

    }
  }
