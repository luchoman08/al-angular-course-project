import { Component, OnInit, Input } from '@angular/core';
import { Review } from '@app/core';

@Component({
  selector: 'app-movie-review-detail',
  templateUrl: './movie-review-detail.component.html',
  styleUrls: ['./movie-review-detail.component.scss']
})
export class MovieReviewDetailComponent implements OnInit {
  @Input() review: Review;
  constructor() { }

  ngOnInit() {
  }

}
