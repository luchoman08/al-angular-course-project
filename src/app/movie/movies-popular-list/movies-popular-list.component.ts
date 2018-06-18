import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ResultsInterface, Movie, MovieService } from '@app/core';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.scss']
})
export class MoviesPopularListComponent implements OnInit {
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
    this.movieResults$ = this.movieService.getPopular(this.page);
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
