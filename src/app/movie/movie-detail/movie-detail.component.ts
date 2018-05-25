import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Movie, AuthService, JwtService } from '@app/core';
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
    private jwtService: JwtService,
    private authService: AuthService
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
