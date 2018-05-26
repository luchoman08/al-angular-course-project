import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Movie, AuthService, JwtService } from '@app/core';
import { ImageService } from '@app/core/services/image.service';
import { BackdropImageSizes } from '../../core/images/enums/backdrop-image-sizes.interface';
import { PosterImageSizes } from '../../core/images/enums/poster-image-sizes.interface';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  posterPath: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private authService: AuthService,
    private imageService: ImageService
  ) {
    this.movie = new Movie();
    this.galleryImages = new Array<NgxGalleryImage>();
  }

  ngOnInit() {
    console.log(this.jwtService.getToken());
    if (!this.jwtService.getToken()) {
      this.authService.createRequestToken().subscribe();
  } else {
    if (!this.jwtService.getSessionId()) {
    console.log(this.jwtService.getToken());
    this.authService.createSession().subscribe(
      response =>
      console.log(response)
    );
    } else {
    console.log (this.jwtService.getSessionId());
  }
  }
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
        this.posterPath = this.imageService.get(this.movie.poster_path, PosterImageSizes.W185);
        console.log(this.movie);
        if ( this.movie.images ) {
          for (const backdrop of this.movie.images.backdrops) {

      this.galleryImages.push({
        small: this.imageService.get(backdrop.file_path, BackdropImageSizes.W300),
        medium: this.imageService.get(backdrop.file_path, BackdropImageSizes.W780),
        big: this.imageService.get(backdrop.file_path, BackdropImageSizes.W1280)
    });
          }
        }
      }
    );

  }

}
