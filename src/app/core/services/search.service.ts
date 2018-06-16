import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith
} from 'rxjs/operators';

import { ApiService } from './shared/api.service';
import { Results, MovieCombinedInterface, PersonCombinedInterface } from '@app/core/models';
import { PeopleService } from './people.service';
import { TvShowService } from './tv-show.service';
import { TvCombinedInterface } from '@app/core/models/search/combined/tv-combined.interface';
import { MediaTypeEnum } from '../models/enums/media-type.enum';

import {
  Movie,
  Person,
  TVShow,

  MovieInterface,
  PersonInterface,
  TvShowInterface
} from '@app/core/models';
import { MovieFactory } from '@app/core/factories';
import { FactoriesService } from './factories.service';

@Injectable()
export class SearchService {
  constructor (
    private apiService: ApiService,
    private factoriesService: FactoriesService
  ) {}


  /**
   * Search movies from string input and return them ordered by vote average
   *
   * @private
   * @param {string} query
   * @returns {Observable<Movie[]>}
   * @memberof SearchService
   */
  private searchMoviesFromString(query: string): Observable<Movie[]> {
          const params = new HttpParams().set('query', query);
          return this.apiService.get('/search/movie', params).pipe(
              map((data: Results<Movie>) => {
                  return data.results
                      .map((movie: MovieInterface) => {
                          return this.factoriesService.makeMovie(movie);
                      })
                      .sort(Movie.sortMethod);
              })
          );
      }
  /**
   * Receive an observable of string and return the movies result from api, searched
   * with query existing at observable, the movies are returned sorted by vote average
   *
   * @param {Observable<string>} observable
   * @returns {Observable<Movie[]>}
   * @memberof SearchService
   */

  searchMovies(observable: Observable<string>): Observable<Movie[]> {
      return observable.pipe(
          debounceTime(100),
          distinctUntilChanged(),
          switchMap((searchTerm: string) => {
              return this.searchMoviesFromString(searchTerm);
          })
      );
  }
/**
 *
 *
 * @param {Observable<string>} observable
 * @param {number} [page]
 * @returns {(Observable <
 *     Results <
 *       MovieCombinedInterface |
 *       PersonCombinedInterface |
 *       TvCombinedInterface
 *       >
 *   >)}
 * @memberof SearchService
 */
searchCombined( observable: Observable<string>, page?: number ):
  Observable <
    Results <
      MovieCombinedInterface |
      PersonCombinedInterface |
      TvCombinedInterface
      >
  > {
    return observable.pipe(
      startWith('a'),
      debounceTime(100),
      distinctUntilChanged(),
      switchMap( (searchTerm: string) => {
        const params = new HttpParams().set('query', searchTerm);
        return this.apiService.get('/search/multi', params)
        .pipe(map (
            (data: Results<
              MovieCombinedInterface |
              PersonCombinedInterface |
              TvCombinedInterface>) => {
              return data;
              }));
             }
        )
  );

        }


}
