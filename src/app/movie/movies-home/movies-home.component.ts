import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Results, Movie, MovieService } from '@app/core/';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

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
