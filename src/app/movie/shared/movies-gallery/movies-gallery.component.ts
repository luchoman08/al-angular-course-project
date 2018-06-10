import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

import {
  Movie,
  MovieService,
  GalleryImagesService,
  galleryOptionsMovieBackdropDetail
} from '@app/core/';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit {

  @Input() movies: Movie[];
  selectedImage: NgxGalleryImage;
  galleryOptions: NgxGalleryOptions[];
  galleryMovieImages: NgxGalleryImage[];
  constructor(
    private router: Router,
    private galeryImagesService: GalleryImagesService,
    private moviesService: MovieService
  ) {
    this.galleryMovieImages = new Array<NgxGalleryImage>();
    this.galleryOptions = galleryOptionsMovieBackdropDetail;
   }

  ngOnInit() {
    this.galleryMovieImages = this.galeryImagesService.getMovieBackdropDescriptionGalleryImages(this.movies);
    this.selectedImage = this.galleryMovieImages[0];
  }
  /**
   * React at change movie in preview, updated selectedImage (NgxGalleryImage)
   * and make a petition to tmdb of actual movie selected anticipating visit to the
   * selected movie in preview for fast load if visit that
   * @param {{ index: number; image: NgxGalleryImage; }} change
   * @memberof MoviesGalleryComponent
   */
  changeMoviePreview(change: { index: number; image: NgxGalleryImage; }) {
    this.selectedImage = change.image;
    this.moviesService.get(this.getIdSelectedMovie());
  }
  /**
   * Obtain movie selected in ngx gallery based in its description
   * than should be the title of the movie
   * @return movie id
   */

   getIdSelectedMovie(): number {
    return this.movies.filter(
      movie =>
      this.selectedImage.description.indexOf(movie.title) !== -1)[0].id;
   }
  goToMovie() {
    const idSelectedMovie = this.getIdSelectedMovie();
    this.router.navigate(['./movies', idSelectedMovie]);
  }

}
