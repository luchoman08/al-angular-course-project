import { Injectable } from '@angular/core';
import { MovieFactory } from '@app/core/factories';
import { MovieInterface, Movie } from '@app/core/models';
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
  constructor() {
    this.movieFactory = new MovieFactory();
   }
   makeMovie( movieInterface: MovieInterface ): Movie {
     return this.movieFactory.make( movieInterface );
   }
}
