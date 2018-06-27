import { Component, OnInit } from '@angular/core';
import { Movie, ResultsInterface, MovieService } from '@app/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-movie-in-theatres-list',
  templateUrl: './movie-in-theatres-list.component.html',
  styleUrls: ['./movie-in-theatres-list.component.scss']
})
export class MovieInTheatresListComponent implements OnInit {

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
    this.movieResults$ = this.movieService.getInTheatres(this.page);
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
    this.updateData();
   }

}
