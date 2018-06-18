import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieService, ResultsInterface, Movie } from '@app/core';
@Component({
  selector: 'app-movie-top-rated-list',
  templateUrl: './movie-top-rated-list.component.html',
  styleUrls: ['./movie-top-rated-list.component.scss']
})
export class MovieTopRatedListComponent implements OnInit {
  resultsLength: number;
  movieResults$: Observable<ResultsInterface<Movie>>;
  movies$ = new  Observable<Movie[]>();
  page: number;
  constructor(
    private movieService: MovieService
  ) {
    this.page = 0;
    this.resultsLength = 20; // default page size
  }
   updateData() {
    this.movieResults$ = this.movieService.getTopRated(this.page);
    this.movieResults$.subscribe(
      (moviesResults: ResultsInterface<Movie>) => {
        console.log(moviesResults);
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
    this.updateData();
   }

}
