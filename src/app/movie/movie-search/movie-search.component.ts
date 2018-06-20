import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  movieResults$: Observable<ResultsInterface<Movie>>;
  movies$ = new Observable<Movie[]>();
  page: number;
  constructor(
    private movieService: MovieService,
    private _route: ActivatedRoute
  ) {
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
    this.searchValueChages.subscribe(
      () => {
        this.updateData();
      }
    );

    this._route.data.subscribe((data: { moviesResult: ResultsInterface<Movie> }) => {
      this.movies$ = of(data.moviesResult.results);
        this.resultsLength = data.moviesResult.total_results;
    });
  }


}
