import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { MovieService, ResultsInterface, Movie } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchCtrl: FormControl;
  searchValueChages: Observable<string>;
  resultsLength: number;
  loading_results: boolean;
  totalPages: number;
  movieResults$: Observable<ResultsInterface<Movie>>;
  movies: Movie[];
  page: number;
  constructor(
    private movieService: MovieService,
    private _route: ActivatedRoute
  ) {
    this.movies = new Array<Movie>();
    this.loading_results = false;
    this.searchCtrl = new FormControl();
    this.page = 0;
    this.resultsLength = 20; // default page size
    this.searchValueChages = this.searchCtrl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged());
  }
  updateData() {
    this.movieResults$ = this.movieService.searchMovies(this.searchCtrl.value, this.page);
    this.movieResults$.subscribe(
      (moviesResults: ResultsInterface<Movie>) => {
        this.movies = this.movies.concat(moviesResults.results) ;
        this.loading_results = false;
        this.totalPages  = moviesResults.total_pages;
        this.resultsLength = moviesResults.total_results;
      }
    );
  }
  getNextPage() {
    if ( !(this.page >= this.totalPages) ){
    this.page = this.page + 1;
    this.loading_results = true;
    this.updateData();
    }
  }
  ngOnInit() {
    this.searchValueChages.subscribe(
      () => {
        this.movies = new Array<Movie>();
        this.page = 0;
        this.updateData();
      }
    );
    this._route.data.subscribe((data: { moviesResult: ResultsInterface<Movie> }) => {
      this.movies = new Array<Movie>();
      this.movies = this.movies.concat(data.moviesResult.results) ;
      this.totalPages = data.moviesResult.total_pages;
      this.resultsLength = data.moviesResult.total_results;
    });
  }


}
