import { Component, OnInit, Input } from '@angular/core';
import { PersonCastCreditCombinedModel } from '@app/people/models/person-cast-credit-combined.model';
import { PersonCrewCreditCombinedModel } from '../models/person-crew-credit-combined.model';
import { PosterImageSizesInterface, POSTER_IMAGE_SIZES } from '@app/core';

@Component({
  selector: 'app-person-credits-combined-detail',
  templateUrl: './person-credits-combined-detail.component.html',
  styleUrls: ['./person-credits-combined-detail.component.scss']
})
export class PersonCreditsCombinedDetailComponent implements OnInit {
  @Input() personCredit: PersonCastCreditCombinedModel | PersonCrewCreditCombinedModel;
  POSTER_IMAGE_SIZES: PosterImageSizesInterface = POSTER_IMAGE_SIZES;
  constructor() { }

  ngOnInit() {
  }

}
