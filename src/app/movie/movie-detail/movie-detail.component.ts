import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/v3/movie.model';
import { MovieService } from '../../core/services/v3/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,

  ) {
    this.movie = new Movie();
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { movie: Movie }) => {
        this.movie = data.movie;
        console.log(this.movie.videos);
      }
    );
  }

}
