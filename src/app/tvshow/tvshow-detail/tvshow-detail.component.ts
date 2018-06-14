import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {
  NgxGalleryComponent,
  NgxGalleryOptions,
  NgxGalleryImage
} from 'ngx-gallery';

import { TVShow, PosterImageSizesInterface, GalleryImagesService, POSTER_IMAGE_SIZES,
  galleryOptionsFullScreenOnly,
  MediaTypeEnum} from '@app/core';
import { ImageURLPipe, YouTubeVideoDialogComponent, FullScreenGalleryComponent } from '@app/shared';
import { ImageTypeEnum } from '../../core/models/images/enums/image-type.enum';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.scss']
})
export class TvshowDetailComponent implements OnInit {
  @ViewChild('backdropsGallery') backdropGallery: FullScreenGalleryComponent;
  @ViewChild('postersGallery') postersGallery: FullScreenGalleryComponent;

  tvShow: TVShow;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  galleryOptions: NgxGalleryOptions[];
  tvShowType: MediaTypeEnum;
  posterType: ImageTypeEnum;
  backdropType: ImageTypeEnum;
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private galleryImageService: GalleryImagesService,
  ) {
    this.posterType = ImageTypeEnum.POSTER;
    this.backdropType = ImageTypeEnum.BACKDROP;
    this.tvShowType = MediaTypeEnum.TV;
    this.POSTER_IMAGE_SIZES =  POSTER_IMAGE_SIZES;
    this.tvShow = new TVShow();
    this.galleryImages = new Array<NgxGalleryImage>();
  }

  openPreviewPosters() {
    this.postersGallery.openPreviewImages();
  }
  openPreviewBackdrops() {
    this.backdropGallery.openPreviewImages();
  }

  ngOnInit() {
    this.galleryOptions = galleryOptionsFullScreenOnly;
    this.route.data.subscribe((data: { tvShow: TVShow }) => {
      this.tvShow = new TVShow();
      this.tvShow = TVShow.fromJSON(data.tvShow);
      console.log(this.tvShow);
  });
  }

}
