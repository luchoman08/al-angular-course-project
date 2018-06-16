import { Component, OnInit } from '@angular/core';
import { Movie } from '@app/core/';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-full-credits',
  templateUrl: './movie-full-credits.component.html',
  styleUrls: ['./movie-full-credits.component.scss']
})
export class MovieFullCreditsComponent implements OnInit {
  movie: Movie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { movie: Movie }) => {

      this.movie = new Movie();
      this.movie = data.movie;
      console.log(data.movie);
    });
  }

}
