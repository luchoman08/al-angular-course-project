import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from './shared';

import {
  Review,
  Results
} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private apiService: ApiService) { }
  getMovieReviews(movieId: number): Observable<Results<Review>> {
    return this.apiService.get(`/movie/${movieId}/reviews`);
  }
}
