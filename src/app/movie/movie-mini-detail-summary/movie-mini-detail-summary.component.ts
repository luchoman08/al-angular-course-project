import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@app/core/';

@Component({
  selector: 'app-movie-mini-detail-summary',
  templateUrl: './movie-mini-detail-summary.component.html',
  styleUrls: ['./movie-mini-detail-summary.component.scss']
})
export class MovieMiniDetailSummaryComponent implements OnInit {
  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
