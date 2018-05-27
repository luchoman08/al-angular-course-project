import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Movie, AuthService, JwtService } from '@app/core';
import { ImageService } from '@app/core/services/image.service';
import { PosterImageSizes, BackdropImageSizes } from '@app/core/images/enums/';
import { galleryOptions } from './gallery-options';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  safeURL: SafeResourceUrl;
  private player;
  private ytEvent;
  posterPath: string;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private authService: AuthService,
    private imageService: ImageService
  ) {
    this.movie = new Movie();
    this.galleryImages = new Array<NgxGalleryImage>();
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
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
    this.galleryOptions = galleryOptions;
    this.route.data.subscribe(
      (data: { movie: Movie }) => {
        this.movie = data.movie;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movie.videos.results[0].key);
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
