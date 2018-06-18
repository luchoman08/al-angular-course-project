import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {
    map,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    startWith
} from 'rxjs/operators';

import { ApiService } from './shared/api.service';
import { ResultsInterface, MovieCombinedInterface, PersonCombinedInterface } from '@app/core/models';
import { TvCombinedInterface } from '@app/core/models/search/combined/tv-combined.interface';

import {
    Movie,
    MovieInterface
} from '@app/core/models';
import { FactoriesService } from './factories.service';
import { MovieService } from '@app/core/services/movie.service';

@Injectable()
export class SearchService {
    constructor(
        private apiService: ApiService,
        private movieService: MovieService,
        private factoriesService: FactoriesService
    ) { }


    /**
     *
     *
     * @param {Observable<string>} observable
     * @param {number} [page]
     * @returns { Observable <
     *     ResultsInterface <
     *       MovieCombinedInterface |
     *       PersonCombinedInterface |
     *       TvCombinedInterface
     *       >
     *   >)}
     * @memberof SearchService
     */
    searchCombined(observable: Observable<string>, page?: number):
        Observable<
        ResultsInterface<
        MovieCombinedInterface |
        PersonCombinedInterface |
        TvCombinedInterface
        >
        > {
        return observable.pipe(
            startWith(''),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((searchTerm: string) => {
                
                if (searchTerm !== '') {
                    const params = new HttpParams().set('query', searchTerm);
                    return this.apiService.get('/search/multi', params)
                        .pipe(map(
                            (data: ResultsInterface<
                                MovieCombinedInterface |
                                PersonCombinedInterface |
                                TvCombinedInterface>) => {
                                return data;
                            }));
                } else {
                    return of(null);
                }
            }
            )
        );

    }


}
