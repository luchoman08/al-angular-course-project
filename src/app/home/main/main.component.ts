import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  NgxGalleryOptions,
  NgxGalleryImage
} from 'ngx-gallery';

import {
Movie, ResultsInterface,
MovieService
} from '@app/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  popularMoviesResults$: Observable<ResultsInterface<Movie>>;
  inTheatresMoviesResults$: Observable<ResultsInterface<Movie>>;
  topRatedMoviesResults$: Observable<ResultsInterface<Movie>>;
  constructor( private moviesService: MovieService) { }

  ngOnInit() {
    this.popularMoviesResults$ = this.moviesService.getPopular();
    this.inTheatresMoviesResults$ = this.moviesService.getInTheatres();
    this.topRatedMoviesResults$ = this.moviesService.getTopRated();
  }
}
