import { Injectable } from '@angular/core';

import { Image$ } from '@app/core/models';
import { ApiService } from '@app/core/services/shared';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(
  ) { }

  orderImages(images: Image$[]): Image$[] {
    return images.sort(Image$.sortMethod);
  }
  preload(url: string) {
    var image = new Image();
    image.src = url;
  }

}