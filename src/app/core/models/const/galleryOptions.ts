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
        thumbnailsColumns: 3,
        thumbnailsRows: 2,
        thumbnailsPercent: 40,
        thumbnailsMoveSize: 3,
        imagePercent: 60,
        thumbnailMargin: 2,
        thumbnailsMargin: 2,
        imageDescription: true,
        lazyLoading: true
      },
      ];
      export const galleryOptionsPeopleProfileDetail: NgxGalleryOptions[] = [
        {
          width: '100%',
          thumbnailsColumns: 4,
          imageAutoPlay: true,
          imageAutoPlayPauseOnHover: true,
          imageInfinityMove: true,
          thumbnailsMoveSize: 4,
          imageAutoPlayInterval: 4000,
          thumbnailsRows: 1,
          thumbnailsPercent: 20,
          imagePercent: 80,
          thumbnailMargin: 2,
          thumbnailsMargin: 2,
          imageDescription: true,
          lazyLoading: true
        },
        ];
