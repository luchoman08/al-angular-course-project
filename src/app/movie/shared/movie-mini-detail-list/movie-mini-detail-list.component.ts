import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@app/core/';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-mini-detail-list',
  templateUrl: './movie-mini-detail-list.component.html',
  styleUrls: ['./movie-mini-detail-list.component.scss']
})
export class MovieMiniDetailListComponent implements OnInit {
  @Input() movies$: Observable<Movie[]>;
  @Input() slice: number;
  @Input() wrap: boolean;
  @Input() layoutAlign: string;
  constructor() { }

  ngOnInit() {
    if ( this.slice ) {
      this.movies$ = this.movies$.pipe(map( movies=> movies.slice(0, this.slice)));
    }
    
  }

}
