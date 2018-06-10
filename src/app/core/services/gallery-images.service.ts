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
    getBackdropDescriptionGalleryImages(movies: Movie[]): NgxGalleryImage[] {
      const galleryImages = new Array<NgxGalleryImage>();
        for (const movie of movies.sort(Movie.sortMethod)) {
          galleryImages.push({
            description: movie.title + '    ' + '&#9733;' + movie.vote_average,
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
