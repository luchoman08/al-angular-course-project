import { Injectable } from '@angular/core';
import { MovieFactory } from '@app/core/factories';
import { MovieInterface, Movie, ResultsInterface, GenreInterface, Genre } from '@app/core/models';
import { MovieResultsFactory } from '@app/core/factories/movie-results-factory';
import { GenreFactory } from '@app/core/factories/genres-factory';
/**
 * Provider of all factories for non directly dependence and instanciation of factories in each service
 * Also allow a common point of intersection of all factories, services does not depend directly of 
 * factories, making posible replace factories or update their without break services
 */
@Injectable({
  providedIn: 'root'
})
export class FactoriesService {
  private movieFactory: MovieFactory;
  private movieResultsFactory: MovieResultsFactory;
  private genreFactory: GenreFactory;
  constructor() {
    this.movieFactory = new MovieFactory();
    this.movieResultsFactory = new MovieResultsFactory();
    this.genreFactory = new GenreFactory();
   }
   makeMovie( movieInterface: MovieInterface ): Movie {
     return this.movieFactory.make( movieInterface );
   }
   makeMovieResults( movieInterfaceResults: ResultsInterface<MovieInterface>): ResultsInterface<Movie> {
    return this.movieResultsFactory.make(movieInterfaceResults);
   }
   makeGenre( genreInterface: GenreInterface ): Genre {
     return this.genreFactory.make(genreInterface);
   }
   makeGenres( genreInterfaces: GenreInterface[] ): Genre[] {
    return this.genreFactory.makeMultiple(genreInterfaces);
  }
}
