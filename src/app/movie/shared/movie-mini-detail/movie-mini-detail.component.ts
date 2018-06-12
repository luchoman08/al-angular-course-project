import { Component, OnInit, Input } from '@angular/core';
import {
  Movie,
  PosterImageSizesInterface,
  POSTER_IMAGE_SIZES
} from '@app/core/';

@Component({
  selector: 'app-movie-mini-detail',
  templateUrl: './movie-mini-detail.component.html',
  styleUrls: ['./movie-mini-detail.component.scss']
})
export class MovieMiniDetailComponent implements OnInit {
  @Input() movie: Movie;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface;
  constructor() {
    this.POSTER_IMAGE_SIZES = POSTER_IMAGE_SIZES;
   }
  ngOnInit() {
  }

}
