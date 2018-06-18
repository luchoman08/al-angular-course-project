import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from './shared';

import {
  Review,
  ResultsInterface
} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private apiService: ApiService) { }
  getMovieReviews(movieId: number): Observable<ResultsInterface<Review>> {
    return this.apiService.get(`/movie/${movieId}/reviews`);
  }
}
