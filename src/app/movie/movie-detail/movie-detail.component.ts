import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/v3/movie.model';
import { MovieService } from '../../core/services/v3/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TVSeriesCacheService } from '../../core/services/cache/tv-series.cache.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private tvSeriesCacheService: TVSeriesCacheService
  ) {
    this.movie = new Movie();
    this.galleryImages = new Array<NgxGalleryImage>();
  }

  ngOnInit() {

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: true
      }
  ];
    this.route.data.subscribe(
      (data: { movie: Movie }) => {
        this.movie = data.movie;
        if ( this.movie.images ) {
          for (const backdrop of this.movie.images.backdrops) {

      this.galleryImages.push({
        small: 'https://image.tmdb.org/t/p/w500/' + backdrop.file_path,
        medium: 'https://image.tmdb.org/t/p/w500/' + backdrop.file_path,
        big: 'https://image.tmdb.org/t/p/w500/' + backdrop.file_path
    });
          }
        }
      }
    );

  }

}
