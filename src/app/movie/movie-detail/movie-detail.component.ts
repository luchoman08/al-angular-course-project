import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryComponent
} from 'ngx-gallery';

import {
  Movie,
  CreditsModel,
  BackdropImageSizesInterface,

  PosterImageSizesInterface,
  POSTER_IMAGE_SIZES,
  galleryOptionsFullScreenOnly,
  BACKDROP_IMAGE_SIZES,

  GalleryImagesService,
  CreditsService
} from '@app/core/';

import {
  YoutubeVideoDialogComponent,
  ImageURLPipe,
 } from '@app/shared';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  credits$: Observable<CreditsModel>;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private galleryImageService: GalleryImagesService,
    private creditsService: CreditsService,
    private imgURLPipe: ImageURLPipe
  ) {
    this.movie = new Movie();
    this.POSTER_IMAGE_SIZES =  POSTER_IMAGE_SIZES;
    this.galleryImages = new Array<NgxGalleryImage>();
    this.galleryOptions = galleryOptionsFullScreenOnly;
  }
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  openTrailers(): void {
    console.log(this.movie.getVideoKeys());
    const dialogRef = this.dialog.open(YoutubeVideoDialogComponent, {
      width: '750px',
      height: '500px',
      data: {
        video_keys: this.movie.getVideoKeys()
      }
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { movie: Movie }) => {
      this.movie = new Movie();
      this.movie = Movie.fromJSON(data.movie);

      this.galleryImages = this.galleryImageService.
      getBackdropGalleryImages(this.movie.images.backdrops);

      this.credits$ = this.creditsService.getMovieCredits(this.movie.id);
    });
  }
}
