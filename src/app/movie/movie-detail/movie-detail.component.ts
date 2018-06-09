import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { galleryOptions } from './gallery-options';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { PosterImageSizesInterface } from '@app/core';

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryComponent
} from 'ngx-gallery';

import {
  Movie,
  POSTER_IMAGE_SIZES,
  BackdropImageSizesInterface,
  BACKDROP_IMAGE_SIZES,
  CreditsModel,
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
  BACKDROP_IMAGE_SIZES: BackdropImageSizesInterface;
  posterPath: string;
  credits$: Observable<CreditsModel>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private creditsService: CreditsService,
    private imgURLPipe: ImageURLPipe
  ) {
    this.BACKDROP_IMAGE_SIZES = BACKDROP_IMAGE_SIZES;
    this.POSTER_IMAGE_SIZES =  POSTER_IMAGE_SIZES;
    this.movie = new Movie();
    this.galleryImages = new Array<NgxGalleryImage>();
  }
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  openDialog(): void {
    console.log(this.movie.getVideoKeys());
    const dialogRef = this.dialog.open(YoutubeVideoDialogComponent, {
      width: '750px',
      height: '500px',
      data: {
        video_keys: this.movie.getVideoKeys()
      }
    });
  }
  initImages(): void {
    if (this.movie.images) {
      for (const backdrop of this.movie.images.backdrops) {
        this.galleryImages.push({
          small: this.imgURLPipe.transform(
            backdrop.file_path,
            this.BACKDROP_IMAGE_SIZES.W300
          ),
          medium: this.imgURLPipe.transform(
            backdrop.file_path,
            this.BACKDROP_IMAGE_SIZES.W780
          ),
          big: this.imgURLPipe.transform(
            backdrop.file_path,
            this.BACKDROP_IMAGE_SIZES.W1280
          )
        });
      }
    }
  }
  ngOnInit() {
    this.galleryOptions = galleryOptions;

    this.route.data.subscribe((data: { movie: Movie }) => {
      this.movie = new Movie();
      this.galleryImages = new Array<NgxGalleryImage>();
      this.movie = Movie.fromJSON(data.movie);
      this.credits$ = this.creditsService.getMovieCredits(this.movie.id);
      this.initImages();
    });
  }
}
