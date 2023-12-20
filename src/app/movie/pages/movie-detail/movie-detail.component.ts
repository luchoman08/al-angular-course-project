import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';


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
  @ViewChild('backdropsGallery', { static: true }) backdropGallery: FullScreenGalleryComponent;
  @ViewChild('postersGallery', { static: true }) postersGallery: FullScreenGalleryComponent;

  movie: Movie;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  BACKDROP_IMAGE_SIZES: BackdropImageSizesInterface;
  backdropType: ImageTypeEnum;
  posterType: ImageTypeEnum;
  similarMovies: Movie[];
  movieType: MediaTypeEnum;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.movie = new Movie();
    this.similarMovies = new Array<Movie>();
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
      this.similarMovies = this.movie.similar.results;
    });
  }
  
}
