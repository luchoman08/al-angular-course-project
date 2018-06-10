import { Injectable } from '@angular/core';
import { NgxGalleryImage } from 'ngx-gallery';
import { ImageURLPipe } from '@app/shared/pipes';
import { BACKDROP_IMAGE_SIZES, Image, Movie } from '@app/core/models';
@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {

  constructor(
    private imageURLPipe: ImageURLPipe
  ) { }
  getBackdropGalleryImages(backdropImages: Image[]): NgxGalleryImage[] {
    const galleryImages = new Array<NgxGalleryImage>();
      for (const backdrop of backdropImages) {
        galleryImages.push({
          small: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W300
          ),
          medium: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W780
          ),
          big: this.imageURLPipe.transform(
            backdrop.file_path,
            BACKDROP_IMAGE_SIZES.W1280
          )
        });
      }

      return galleryImages;
    }
    /**
     * Get backdrop image description in gallery ngx for a movie
     *
     * @private
     * @param {string} description
     * @param {boolean} vote_average // include vote avg and start icon
     * @param {boolean} vote_count // include text 'Vote count: <vote_count>
     * @returns {string}
     * @memberof GalleryImagesService
     */
    private getBackdropDescription( description: string, vote_average?: number, vote_count?: number): string {
      let backdropDescription: string = description;
      if (vote_average) {
        backdropDescription = backdropDescription.concat('    ' , '&#9733;', String(vote_average));
      }
      if (vote_count) {
        backdropDescription = backdropDescription.concat('    Votes: ', String(vote_count));
      }
      return backdropDescription;
    }
    getMovieBackdropDescriptionGalleryImages(movies: Movie[]): NgxGalleryImage[] {
      const galleryImages = new Array<NgxGalleryImage>();
        for (const movie of movies.sort(Movie.sortMethod)) {
          galleryImages.push({
            description: this.getBackdropDescription(
              movie.title,
              movie.vote_average,
              movie.vote_count),
            // url: './movies/' + movie.id,
            small: this.imageURLPipe.transform(
              movie.backdrop_path,
              BACKDROP_IMAGE_SIZES.W300,
            ),
            medium: this.imageURLPipe.transform(
              movie.backdrop_path,
              BACKDROP_IMAGE_SIZES.W780
            ),
            big: this.imageURLPipe.transform(
              movie.backdrop_path,
              BACKDROP_IMAGE_SIZES.W1280
            )
          });
        }

        return galleryImages;
      }
}
