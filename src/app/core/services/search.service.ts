import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '@app/core/models';
import { ApiService } from '@app/core/services/shared/api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie.model';
@Injectable()
export class SearchService {
  constructor (
    private apiService: ApiService
  ) {}

  searchMovies(query: string): Observable<Movie[]> {
    console.log(query);
    const params = new HttpParams().set('query', query);
        return this.apiService.get('/search/movie', params)
        .pipe(map(data => {
          return (<Movie[]> data.results).sort((movie1: Movie, movie2: Movie) => movie2.vote_average - movie1.vote_average);
        } ));
  }


}
