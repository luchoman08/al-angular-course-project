import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@app/core/';

@Component({
  selector: 'app-movie-mini-detail-list',
  templateUrl: './movie-mini-detail-list.component.html',
  styleUrls: ['./movie-mini-detail-list.component.scss']
})
export class MovieMiniDetailListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() slice: number;
  @Input() wrap: boolean;
  @Input() layoutAlign: string;
  constructor() { }

  ngOnInit() {
    if ( this.slice ) {
      this.movies.slice(0, this.slice);
    }
    
  }

}
