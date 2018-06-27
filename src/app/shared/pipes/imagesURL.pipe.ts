import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

import {
  ImageSizeValueModel,
  MediaTypeEnum
} from '@app/core/models';
import { AssetsService } from '@app/core';


@Pipe({
  name: 'imageURL'
})
export class ImageURLPipe implements PipeTransform {
  constructor(private assetsService: AssetsService) {

  }
  api_url = environment.imagesTMDB_URL;
  transform(path: string, size: ImageSizeValueModel, mediaType: MediaTypeEnum): string {
    if (path && path != '') {
      return `${this.api_url}/${size.name}${path}`;
    } else if (mediaType) {
      switch (mediaType) {
        case MediaTypeEnum.MOVIE: {
          return this.assetsService.getDefaultPosterImageURL();
        }
        case MediaTypeEnum.PERSON: {
          return this.assetsService.getDefaltProfileImageURL();
        }
      }
    }
  }
}
