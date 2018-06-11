import { Injectable } from '@angular/core';

import { Image } from '@app/core/models';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  orderImages(images: Image[]): Image[] {
    return images.sort(Image.sortMethod);
  }
  constructor() { }
}
