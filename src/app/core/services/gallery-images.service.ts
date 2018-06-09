import { Injectable } from '@angular/core';
import { Image } from '@app/core/';
import { NgxGalleryImage } from 'ngx-gallery';
import { ImageURLPipe } from '@app/shared';
import { BACKDROP_IMAGE_SIZES } from '@app/core/models';
@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {

  constructor(
    private imageURLPipe: ImageURLPipe
  ) { }
  getBackdropGalleryImages(backdropImages: Image[]): NgxGalleryImage[] {
    const galleryImages = new Array<NgxGalleryImage>();
      for (const backdrop of backdropImages) {
        galleryImages.push({
          small: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W300
          ),
          medium: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W780
          ),
          big: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W1280
          )
        });
      }

      return galleryImages;
    }
}
