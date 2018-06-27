import { Component, OnInit, Input } from '@angular/core';
import { Review } from '@app/core';

@Component({
  selector: 'app-movie-review-list',
  templateUrl: './movie-review-list.component.html',
  styleUrls: ['./movie-review-list.component.scss']
})
export class MovieReviewListComponent implements OnInit {
  @Input() reviews: Review[];
  constructor() { }

  ngOnInit() {
  }

}
