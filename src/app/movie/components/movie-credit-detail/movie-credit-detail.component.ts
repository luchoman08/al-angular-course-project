import { Component, OnInit, Input } from '@angular/core';

import {
  Crew,
  Cast,
  ProfileImageSizesInterface,
  PROFILE_IMAGE_SIZES
} from '@app/core';

@Component({
  selector: 'app-movie-credit-detail',
  templateUrl: './movie-credit-detail.component.html',
  styleUrls: ['./movie-credit-detail.component.scss']
})
export class MovieCreditDetailComponent implements OnInit {
  @Input() credit: Cast|Crew;
  PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
  typeOfCredit: string;
  constructor() {
    this.PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
   }


  ngOnInit() {
  }

}
