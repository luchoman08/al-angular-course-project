import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {
  NgxGalleryComponent,
  NgxGalleryOptions,
  NgxGalleryImage
} from 'ngx-gallery';

import { TVShow, PosterImageSizesInterface, GalleryImagesService, POSTER_IMAGE_SIZES,
  galleryOptionsFullScreenOnly } from '@app/core';
import { ImageURLPipe, YoutubeVideoDialogComponent } from '@app/shared';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.scss']
})
export class TvshowDetailComponent implements OnInit {

  tvShow: TVShow;
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private galleryImageService: GalleryImagesService,
  ) {
    this.POSTER_IMAGE_SIZES =  POSTER_IMAGE_SIZES;
    this.tvShow = new TVShow();
    this.galleryImages = new Array<NgxGalleryImage>();
  }
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  openTrailers(): void {
    console.log(this.tvShow.getVideoKeys());
    const dialogRef = this.dialog.open(YoutubeVideoDialogComponent, {
      width: '750px',
      height: '500px',
      data: {
        video_keys: this.tvShow.getVideoKeys()
      }
    });
  }

  ngOnInit() {
    this.galleryOptions = galleryOptionsFullScreenOnly;
    this.route.data.subscribe((data: { tvShow: TVShow }) => {
      this.tvShow = new TVShow();
      this.tvShow = TVShow.fromJSON(data.tvShow);
      this.galleryImages = this.galleryImageService.
      getBackdropGalleryImages(this.tvShow.images.backdrops);

  });
  }

}
