import { Component, OnInit } from '@angular/core';
import { KeywordsInterface, Movie, ResultsInterface, MovieService } from '@app/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list-by-keyword',
  templateUrl: './movie-list-by-keyword.component.html',
  styleUrls: ['./movie-list-by-keyword.component.scss']
})
export class MovieListByKeywordComponent implements OnInit {

  keyword: KeywordsInterface;
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
    this.movieResults$ = this.movieService.getByKeyword(this.keyword, this.page);
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
    this.route.data.subscribe((data: { movieResults: ResultsInterface<Movie>, keyword: KeywordsInterface }) => {
      this.keyword = data.keyword;
      this.movieResults$ = of(data.movieResults);
      this.updateData();
    });
   }

}
