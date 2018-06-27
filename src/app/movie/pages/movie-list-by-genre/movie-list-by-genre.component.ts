import { ActivatedRoute } from '@angular/router';
import { Genre } from '@app/core/models';
import { ResultsInterface } from '@app/core/models/interfaces/results.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '@app/core/models/movies/movie.model';
import { MovieService } from '@app/core/services/movie.service';

@Component({
  selector: 'app-movie-list-by-genre',
  templateUrl: './movie-list-by-genre.component.html',
  styleUrls: ['./movie-list-by-genre.component.scss']
})
export class MovieListByGenreComponent implements OnInit {
  genre: Genre;
  resultsLength: number;
  movieResults$: Observable<ResultsInterface<Movie>>;
  movies$ = new  Observable<Movie[]>();
  page: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.page = 0;
    this.resultsLength = 20; // default page size
  }
   updateData() {
    this.movieResults$ = this.movieService.getByGenre(this.genre.id, this.page);
    this.movieResults$.subscribe(
      (moviesResults: ResultsInterface<Movie>) => {
       this.movies$ = of(moviesResults.results);
       this.resultsLength = moviesResults.total_results;
      }
    );
   }
   onSetPage(page: number) {
     this.page = page;
     this.updateData();
   }
  ngOnInit() {
    this.route.data.subscribe((data: { movieResults: ResultsInterface<Movie>, genre: Genre }) => {
      this.genre = data.genre;
      this.movieResults$ = of(data.movieResults);
      this.updateData();
    });
    //this.updateData();
   }

}