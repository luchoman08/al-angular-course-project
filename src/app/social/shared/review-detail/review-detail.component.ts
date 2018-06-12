import { Component, OnInit, Input } from '@angular/core';
import { Review } from '@app/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  @Input() review: Review;
  constructor() { }

  ngOnInit() {
  }

}
