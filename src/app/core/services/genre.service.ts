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
  /** Local cache for save genres */
  private _cacheGenres: Genre[];
  constructor(
    private apiService: ApiService,
    private factoryService: FactoriesService) { 
      this.init_cache();
    }
    /**
     * Return genre from cache 
     *
     * @private
     * @param {(string | number)} id
     * @returns {Observable<Genre>}
     * @memberof GenreService
     */
    private getFromCache(id: string | number ): Observable<Genre> {
      return of (this._cacheGenres.filter( genre => genre.id === Number(id) )[0]);
    }
    /**
     * Make a petition to TMDb and init the `_cache` property, is called at constructor
     * of the `GenreService`
     *
     * @private
     * @memberof GenreService
     */
    private init_cache() {
      this.apiService.get('/genre/movie/list').subscribe(
        (results: {genres: GenreInterface[]}) => {
          this._cacheGenres = this.factoryService.makeGenres(results.genres);
        }
      );
    }
  /**
   * Get genre, from cache if is inited, if the cache does not exist this is initialized and a query is made to API,
   * next the value returnded by the API is returned as a `Genre` instance
   *
   * @param {(string | number)} id
   * @returns {Observable<Genre>}
   * @memberof GenreService
   */
  get(id: string | number): Observable<Genre> {
    if ( !this._cacheGenres ) {
      this.init_cache();
      return this.apiService.get('/genre/' + id);
    } else {
      return this.getFromCache(id);
    }
    
  }
  /**
   * Get all the generes that correspond to the ids given. 
   * If var `maxElements` is given, return only the first `maxElements` genres
   *
   * @param {number[]} ids
   * @param {number} [maxElements]
   * @returns {Observable<Genre[]>}
   * @memberof GenreService
   */
  getMultiple(ids: number[], maxElements?: number): Observable<Genre[]>{
    maxElements? null : maxElements = ids.length  ; 
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
