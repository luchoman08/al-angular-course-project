
import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '@app/core';

@Component({
  selector: 'app-movie-genres-list',
  templateUrl: './movie-genres-list.component.html',
  styleUrls: ['./movie-genres-list.component.scss']
})
export class MovieGenresListComponent implements OnInit {
  @Input() genres: Genre[];
  @Input('max-items') maxItems: number ;
  constructor() { }

  ngOnInit() {
    if ( this.genres && !this.maxItems ) {
      this.maxItems = this.genres.length; 
      this.genres.slice(0,this.maxItems);
    }
  }

}
