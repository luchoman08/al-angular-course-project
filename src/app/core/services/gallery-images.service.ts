import { Injectable } from '@angular/core';
import { NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

import { ImageURLPipe } from '@app/shared/pipes';
import { galleryOptionsPeopleProfileDetail } from '../models/const/galleryOptions';

import {
  Image,
  Movie,
  Person,
  ImageSizeValueModel,
  BACKDROP_IMAGE_SIZES,
  MediaTypeEnum,
  galleryOptionsMovieBackdropDetail,
  ImageTypeEnum,
  PROFILE_IMAGE_SIZES,
  POSTER_IMAGE_SIZES
} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {

  constructor(
    private imageURLPipe: ImageURLPipe
  ) { }

  private getBigSize(mediaType: MediaTypeEnum, imageType: ImageTypeEnum): ImageSizeValueModel {
    switch ( mediaType ) {
      case  MediaTypeEnum.MOVIE: {
        switch ( imageType ) {
          case ImageTypeEnum.BACKDROP: return BACKDROP_IMAGE_SIZES.W1280;
          case ImageTypeEnum.POSTER: return POSTER_IMAGE_SIZES.W780;
        }
        break;
      }
      case  MediaTypeEnum.TV: {
        switch ( imageType ) {
          case ImageTypeEnum.BACKDROP: return BACKDROP_IMAGE_SIZES.W1280;
          case ImageTypeEnum.POSTER: return POSTER_IMAGE_SIZES.W780;
        }
        break;
      }
      case MediaTypeEnum.PERSON: {
        return PROFILE_IMAGE_SIZES.H632;
      }
      }
    }
  private getBigURL(file_path: string, mediaType: MediaTypeEnum, imageType: ImageTypeEnum) {
    const bigSize = this.getBigSize(mediaType, imageType);
    return this.imageURLPipe.transform( file_path, bigSize);
  }

  getFullScreenGalleryImages(
    images: Image[],
    mediaType: MediaTypeEnum,
    imageType: ImageTypeEnum,
    sortImages: boolean = false): NgxGalleryImage[] {
      if ( sortImages ) {
        images.sort(Image.sortMethod);
      }
    const galleryImages = new Array<NgxGalleryImage>();
      for (const image of images) {
        const bigURL = this.getBigURL(image.file_path, mediaType, imageType);
        galleryImages.push({
          big: bigURL
        });
      }
      return galleryImages;
    }
  getFullScreenBackdropGalleryImages(images: Image[]): NgxGalleryImage[] {
    return this.getFullScreenGalleryImages(images, MediaTypeEnum.MOVIE, ImageTypeEnum.BACKDROP);
  }
/**
 * Get full screen poster gallery images based in array of images
 *
 * @param {Image[]} images
 * @returns {NgxGalleryImage[]}
 * @memberof GalleryImagesService
 */
getFullScreenPosterGalleryImages(images: Image[], sort: boolean = false): NgxGalleryImage[] {
  if (sort) {
    images.sort(Image.sortMethod);
  }
    return this.getFullScreenGalleryImages(images, MediaTypeEnum.MOVIE, ImageTypeEnum.POSTER);
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
    private getBackdropDescription( movieTitle: string, vote_average?: number, vote_count?: number): string {
      let backdropDescription: string = movieTitle;
      if (vote_average) {
        backdropDescription = backdropDescription.concat('    ' , '&#9733;', String(vote_average));
      }
      if (vote_count) {
        backdropDescription = backdropDescription.concat('    Votes: ', String(vote_count));
      }
      return backdropDescription;
    }
    /**
     * Get poster description for images in ngx gallery
     *
     * @private
     * @param {string} personName
     * @param {number} [popularity]
     * @returns {string}
     * @memberof GalleryImagesService
     */
    private getPosterDescription( personName: string, popularity?: number): string {
      let backdropDescription: string = personName;
      if (popularity) {
        backdropDescription = backdropDescription.concat('    Popularity: ', String(popularity.toFixed(0)), '%' );
      }
      return backdropDescription;
    }
    /**
     * Return a ngx gallery image with two rows in thumbnails and add a description in the preview images
     *
     * @param {Movie[]} movies
     * @returns {NgxGalleryImage[]}
     * @memberof GalleryImagesService
     */
    getMovieBackdropDescriptionGalleryImages(movies: Movie[]): {images: NgxGalleryImage[], options: NgxGalleryOptions[]} {
      const galleryImages = new Array<NgxGalleryImage>();
        for (const movie of movies.sort(Movie.sortMethod)) {
          galleryImages.push({
            description: this.getBackdropDescription(
              movie.title,
              movie.vote_average,
              movie.vote_count),
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

        return {images: galleryImages, options: galleryOptionsMovieBackdropDetail};
      }
/**
 * Return image gallery of people (poster images) with tree rows of thumbnails and their name
 * and popularity as description of the preview in their posters
 *
 * @param {Person[]} people
 * @returns {{images: NgxGalleryImage[], options: NgxGalleryOptions[]}}
 * @memberof GalleryImagesService
 */
getPeoplePosterDescriptionGallery(people: Person[]): {images: NgxGalleryImage[], options: NgxGalleryOptions[]} {
        const galleryImages = new Array<NgxGalleryImage>();
          for (const person of people.sort(Person.sortMethod)) {
            galleryImages.push({
              description: this.getPosterDescription(
                person.name,
                person.popularity),
                small: this.imageURLPipe.transform(
                person.profile_path,
                POSTER_IMAGE_SIZES.W185,
              ),
              medium: this.imageURLPipe.transform(
                person.profile_path,
                POSTER_IMAGE_SIZES.W500
              ),
              big: this.imageURLPipe.transform(
                person.profile_path,
                POSTER_IMAGE_SIZES.W780
              )
            });
          }
          return {images: galleryImages, options: galleryOptionsPeopleProfileDetail};
        }
}
