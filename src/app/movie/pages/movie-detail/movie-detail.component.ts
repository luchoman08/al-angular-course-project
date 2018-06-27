import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';


import {
  Movie,

  BackdropImageSizesInterface,
  PosterImageSizesInterface,
  POSTER_IMAGE_SIZES,
  BACKDROP_IMAGE_SIZES,

  ImageTypeEnum,
  MediaTypeEnum
} from '@app/core';

import {
  FullScreenGalleryComponent,
  YouTubeVideoDialogComponent,
 } from '@app/shared';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @ViewChild('backdropsGallery') backdropGallery: FullScreenGalleryComponent;
  @ViewChild('postersGallery') postersGallery: FullScreenGalleryComponent;

  movie: Movie;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  BACKDROP_IMAGE_SIZES: BackdropImageSizesInterface;
  backdropType: ImageTypeEnum;
  posterType: ImageTypeEnum;
  similarMovies$: Observable<Movie[]>;
  movieType: MediaTypeEnum;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.movie = new Movie();
    this.movieType = MediaTypeEnum.MOVIE;
    this.posterType = ImageTypeEnum.POSTER;
    this.backdropType = ImageTypeEnum.BACKDROP;
    this.POSTER_IMAGE_SIZES =  POSTER_IMAGE_SIZES;
    this.BACKDROP_IMAGE_SIZES = BACKDROP_IMAGE_SIZES;
  }
  openPreviewPosters() {
    this.postersGallery.openPreviewImages();
  }
  openPreviewBackdrops() {
    this.backdropGallery.openPreviewImages();
  }
  openTrailers(): void {
    console.log(this.movie.getVideoKeys());
    const dialogRef = this.dialog.open(YouTubeVideoDialogComponent, {
      width: '750px',
      height: '500px',
      data: {
        video_keys: this.movie.getVideoKeys()
      }
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { movie: Movie }) => {
      this.movie = data.movie;
      this.similarMovies$ = of(this.movie.similar.results);
    });
  }
}