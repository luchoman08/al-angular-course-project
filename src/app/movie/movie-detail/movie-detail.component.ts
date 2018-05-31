import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryComponent } from 'ngx-gallery';
import { Movie, AuthService, JwtService } from '@app/core';
import { ImageService } from '@app/core/services/image.service';
import { PosterImageSizes, BackdropImageSizes } from '@app/core/images/enums/';
import { galleryOptions } from './gallery-options';
import { MatDialog } from '@angular/material';
import { YoutubeVideoDialogComponent } from '../../shared/common-components/youtube-video-dialog/youtube-video-dialog.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;

  posterPath: string;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    private jwtService: JwtService,
    public dialog: MatDialog,
    private authService: AuthService,
    private imageService: ImageService
  ) {
    this.movie = new Movie();
    this.galleryImages = new Array<NgxGalleryImage>();
  }
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  openDialog(): void {
    console.log(this.movie.getVideoKeys());
    const dialogRef = this.dialog.open(YoutubeVideoDialogComponent, {
      width: '750px',
      height: '500px',
      data: {
        video_keys : this.movie.getVideoKeys()
      }
    });
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
        this.galleryImages = new Array<NgxGalleryImage>();
        this.movie = Movie.fromJSON(data.movie);
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
          console.log(this.galleryImages);
        }
      }
    );

  }

}
