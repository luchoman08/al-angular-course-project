import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';

import { ResultsInterface } from '@app/core/models/interfaces/results.interface';
import { Movie, MovieInterface, Genre, CreatedAtSortMethod, KeywordsInterface, Cast, Crew } from '@app/core/models';
import { ApiService } from './shared';
import { paramsAppendToResponseMoviesAndTv } from './shared';
import { MovieAppendToResponseOptions } from '@app/core/models';
import { FactoriesService } from '@app/core/services/factories.service';
import { defaultMovieResults } from '@app/core/factories/movie-results-factory';
@Injectable()
export class MovieService {
  constructor(
    private apiService: ApiService,
    private factoriesService: FactoriesService
  ) { }
  /**
   * Search movies from string input and return them ordered by vote average
   *
   * @private
   * @param {string} query
   * @returns {Observable<Movie[]>}
   * @memberof SearchService
   */
  public searchMovies(query: string, page?: number): Observable<ResultsInterface<Movie>> {
    if (query === '') {
      return of(defaultMovieResults);
    } else {
      const params = new HttpParams().set('query', query);

      return this.getResultsMultiplePage('/search/movie', page, params);
    }
  }
  /**
   * Support get movies results from a multiple page format, with optional initial `HttParams` 
   *
   * @private
   * @param {string} url
   * @param {number} [page]
   * @param {HttpParams} [paramsInput] initial params to be cloned and extended
   * @returns {Observable<ResultsInterface<Movie>>}
   * @memberof MovieService
   */
  private getResultsMultiplePage(url: string, page?: number, paramsInput?: HttpParams): Observable<ResultsInterface<Movie>> {
    let pageNormalized = page + 1;
    let params: HttpParams;
    if (!paramsInput && pageNormalized) {
      params = new HttpParams().set('page', String(pageNormalized));
    }
    if (paramsInput && !pageNormalized) {
      params = new HttpParams({ fromString: paramsInput.toString() })
    }
    if (paramsInput && pageNormalized) {
      params = new HttpParams({ fromString: paramsInput.toString() }).set('page', String(pageNormalized));
    }
    return this.apiService.get(url, params)
      .pipe(map((data: ResultsInterface<MovieInterface>) => this.factoriesService.makeMovieResults(data)));
  }
  get(id: string | number, options?: MovieAppendToResponseOptions): Observable<Movie> {
    if (options) {
      const params = paramsAppendToResponseMoviesAndTv(options);
      return this.apiService.get('/movie/' + id, params)
        .pipe(
          map(
            (movieInterface: MovieInterface) =>
              this.factoriesService.makeMovie(movieInterface)
          )
        );
    } else {
      return this.apiService.get('/movie/' + id);
    }
  }
  getSimilar(movieId: number, page?: number): Observable<ResultsInterface<Movie>> {
    return this.getResultsMultiplePage(`/movie/${movieId}/similar`, page);
  }
  getPopular(page?: number): Observable<ResultsInterface<Movie>> {
    return this.getResultsMultiplePage('/movie/popular', page);
  }
  getInTheatres(page?: number): Observable<ResultsInterface<Movie>> {
    return this.getResultsMultiplePage('/movie/now_playing', page);
  }
  getTopRated(page?: number): Observable<ResultsInterface<Movie>> {
    return this.getResultsMultiplePage('/movie/top_rated', page);
  }
  /**
   * Get movies for given genre
   * 
   * @param genre number if you want pass the genre id or Genre if you want pass Genre instance
   * @param page optional argument for page 
   * @param sortMethod optional parameter than sort the results by created date, asc or desc 
   */
  getByGenre(genre: Genre | number, page?: number, sortMethod?: CreatedAtSortMethod): Observable<ResultsInterface<Movie>> {
    let genreId: number;
    if (typeof genre === "number") {
      genreId = genre;
    }
    if (genre instanceof Genre) {
      genreId = genre.id;
    }
    if (sortMethod) {
      const params = new HttpParams().set('sort_by', sortMethod);
      return this.getResultsMultiplePage(`/genre/${genreId}/movies`, page, params);

    } else {
      return this.getResultsMultiplePage(`/genre/${genreId}/movies`, page);
    }
  }
  /**
   * Return all movies from backend filtered by keyword
   *
   * @param {(KeywordsInterface | number)} keyword
   * @param {number} [page]
   * @returns {Observable<ResultsInterface<Movie>>}
   * @memberof MovieService
   */
  getByKeyword(keyword: KeywordsInterface | number, page?: number): Observable<ResultsInterface<Movie>> {
    let keywordId: number;
    keywordId = typeof keyword === 'number' ? keyword : keyword.id;
    return this.getResultsMultiplePage(`/keyword/${keywordId}/movies`, page);
  }
  /**
   * Return movie credits by movie id
   *
   * @param {(string|number)} idMovie
   * @returns {Observable<{id: string, cast: Cast[], crew: Crew[]}>}
   * @memberof MovieService
   */
  getMovieCredits(idMovie: string|number): Observable<{id: string, cast: Cast[], crew: Crew[]}> {
    return this.apiService.get(`/movie/${idMovie}/credits`)
    .pipe(map(data => data));
}

}

