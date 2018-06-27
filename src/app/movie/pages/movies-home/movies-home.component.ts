import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResultsInterface, Movie, MovieService } from '@app/core';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

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
