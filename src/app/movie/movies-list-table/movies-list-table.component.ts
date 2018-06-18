import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Movie, PosterImageSizesInterface, POSTER_IMAGE_SIZES, Genre } from '@app/core';
import { Observable, merge, forkJoin } from 'rxjs';
import { MatPaginator, MatSort, Sort, PageEvent } from '@angular/material';
import { map, mergeMap, switchMap, debounceTime } from 'rxjs/operators';
import { GenreService } from '@app/core/services/genre.service';
@Component({
  selector: 'app-movies-list-table',
  templateUrl: './movies-list-table.component.html',
  styleUrls: ['./movies-list-table.component.scss']
})
export class MoviesListTableComponent implements OnInit, OnChanges {
  @Input() movies: Observable<Movie[]> = new Observable<Movie[]>();
  @Output() pageChange = new EventEmitter<number>();
  genresLoaded =  false;
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort = new MatSort();
  displayedColumns = ['title', 'release_date', 'vote_count', 'vote_average', 'genres'];
  @Input() resultsLength: number;
  searchValueChages: Observable<string>;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;


  constructor( private cd: ChangeDetectorRef , private genreService: GenreService) {
      this.POSTER_IMAGE_SIZES = POSTER_IMAGE_SIZES;
  }

  ngOnInit() {
    this.paginator.page.subscribe(
      (page: PageEvent) => {
        console.log(page);
        this.pageChange.emit(page.pageIndex);
      }
    );
    
    console.log(this.resultsLength);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe((sort) => {
      this.sortData(sort);
  });

   
  }
  getGenres() {
    this.movies = this.movies.pipe(map(
      (movies: Movie[])=>{
        return movies.map(movie => {
          movie.genres = this.genreService.getMultiple(movie.genre_ids).pipe(debounceTime(100));
          return movie;
          }); }));
  }
  ngOnChanges() {
    this.getGenres();
  }
  
  sortData(sort: Sort) {
  if (!sort.active || sort.direction == '') {
    return;
  }

  this.movies = this.movies.pipe(map (data => data.sort(( movie1 : Movie, movie2 : Movie ) => {
    let isAsc = sort.direction == 'asc';
    switch (sort.active) {
      case 'title': return compare(movie1.title, movie2.title, isAsc);
      case 'vote_average': return compare(+movie1.vote_average, +movie2.vote_average, isAsc);
      case 'release_date': return compare( new Date(movie1.release_date), new Date(movie2.release_date), isAsc);
      case 'vote_count': return compare(+movie1.vote_count, +movie2.vote_count, isAsc);
      default: return 0;
    }
  }))); 
}
}    

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}