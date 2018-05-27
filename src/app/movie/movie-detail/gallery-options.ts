import { NgxGalleryAnimation } from 'ngx-gallery';

export const galleryOptions = [
  {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
  },
  // max-width 800
  {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
  },
  // max-width 400
  {
      breakpoint: 400,
      preview: true
  }
];
