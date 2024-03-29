import { NgxGalleryOptions, NgxGalleryLayout } from "@kolkov/ngx-gallery";

export const galleryOptionsFullScreenOnly: NgxGalleryOptions[] = [
  {
    image: false,
    lazyLoading: true,
    thumbnails: false,
    width: "0px",
    height: "0px",
  },
];

export const galleryOptionsMovieBackdropDetail: NgxGalleryOptions[] = [
  {
    imageAutoPlay: true,
    imageAutoPlayInterval: 4000,
    imageAutoPlayPauseOnHover: true,
    imageInfinityMove: true,
    thumbnailsColumns: 3,
    thumbnailsRows: 2,
    imageArrowsAutoHide: true,
    thumbnailsPercent: 40,
    thumbnailsMoveSize: 3,
    imagePercent: 60,
    thumbnailMargin: 2,
    thumbnailsMargin: 2,
    imageDescription: true,
    lazyLoading: true,
  },
];
export const galleryOptionsPeopleProfileDetail: NgxGalleryOptions[] = [
  {
    image: true,
    width: "400px",
    height: "700px",
    thumbnailsColumns: 4,
    thumbnailsRows: 2,
    imageDescription: true,
    imageAutoPlay: true,
    imageAutoPlayInterval: 4000,
    imageAutoPlayPauseOnHover: true,
    imageInfinityMove: true,
    thumbnailsMoveSize: 4,
    thumbnailsPercent: 30,
    imagePercent: 70,
    thumbnailMargin: 15,
    thumbnailsMargin: 15,
    lazyLoading: true,
  },
];
