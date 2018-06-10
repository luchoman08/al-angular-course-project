import { NgxGalleryAnimation, NgxGalleryOptions } from 'ngx-gallery';

export const galleryOptionsFullScreenOnly: NgxGalleryOptions[] = [{
  image: false,
  thumbnails: false,
  width: '0px',
  height: '0px'
}];

export const galleryOptionsMovieBackdropDetail: NgxGalleryOptions[] = [
      {
        imageDescription: true,
        lazyLoading: true
      },
      ];

