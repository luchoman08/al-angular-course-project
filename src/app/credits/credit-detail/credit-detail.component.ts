import { Component, OnInit, Input } from '@angular/core';
import { Crew, Cast, ProfileImageSizesInterface } from '@app/core/';
import { ImageURLPipe } from '@app/shared';
import { PROFILE_IMAGE_SIZES } from '@app/core';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit {
  @Input() credit: Cast|Crew;
  PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
  typeOfCredit: string;
  constructor() {
    this.PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
   }


  ngOnInit() {
  }

}
