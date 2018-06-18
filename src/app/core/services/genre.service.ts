import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/shared';
import { FactoriesService } from '@app/core/services/factories.service';
import { Observable, forkJoin, of} from 'rxjs';
import { Genre, GenreInterface } from '@app/core/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  cacheGenres: Genre[];
  constructor(
    private apiService: ApiService,
    private factoryService: FactoriesService) { 
      this.init_cache();
    }
    private getFromCache(id: string | number ): Observable<Genre> {
      return of (this.cacheGenres.filter( genre => genre.id === Number(id) )[0]);
    }
    private init_cache() {
      this.apiService.get('/genre/movie/list').subscribe(
        (results: {genres: GenreInterface[]}) => {
          this.cacheGenres = this.factoryService.makeGenres(results.genres);
        }
      );
    }
  get(id: string | number): Observable<Genre> {
    if ( !this.cacheGenres ) {
      this.init_cache();
      return this.apiService.get('/genre/' + id);
    } else {
      return this.getFromCache(id);
    }
    
  }

  getMultiple(ids: number[], maxElements?: number): Observable<Genre[]>{
    maxElements? null : maxElements = ids.length - 1 ; 
    return forkJoin(ids.slice(0, maxElements).map(
      (id: number) => {
        return this.get(id).pipe(
          map( 
            (genre: GenreInterface) => {
            return this.factoryService.makeGenre(genre);}));
      }
    ));
  }
}
