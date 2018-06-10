import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryImagesService } from '../../core/services/gallery-images.service';

import {
  NgxGalleryOptions,
  NgxGalleryImage
} from 'ngx-gallery';

import {
galleryOptionsMovieBackdropDetail,
Movie, Results,
MovieService
} from '@app/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  popularMoviesResults$: Observable<Results<Movie>>;
  inTheatresMoviesResults$: Observable<Results<Movie>>;
  topRatedMoviesResults$: Observable<Results<Movie>>;
  constructor( private moviesService: MovieService) { }

  ngOnInit() {
    this.popularMoviesResults$ = this.moviesService.getPopular();
    this.inTheatresMoviesResults$ = this.moviesService.getInTheatres();
    this.topRatedMoviesResults$ = this.moviesService.getTopRated();
  }
}
