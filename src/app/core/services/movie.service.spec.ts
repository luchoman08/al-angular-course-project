import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { ApiService } from '@app/core/services/shared';
import { ResultsInterface, Movie } from '@app/core/models';

describe('MovieService', () => {
    let movieService: MovieService;
    let apiService: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService, ApiService],
      imports: [HttpClientModule]
    });
    movieService = TestBed.get(MovieService);
    apiService = TestBed.get(ApiService);
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
  it('#searchMovies without page argument, should return the first page of the search and should have more than one movie ', () => {
      let query = 'avengers';
    movieService.searchMovies(query).subscribe( (movieResults: ResultsInterface<Movie>) => {
        expect(movieResults.page).toBe(0);
        expect(movieResults.results.length).toBeGreaterThan(1);
    })
  });
});
