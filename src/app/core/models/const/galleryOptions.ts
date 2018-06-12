import { NgxGalleryOptions } from 'ngx-gallery';

export const galleryOptionsFullScreenOnly: NgxGalleryOptions[] = [{
  image: false,
  lazyLoading: true,
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

