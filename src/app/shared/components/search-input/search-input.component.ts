import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import {
  MovieCombinedInterface,
  PersonCombinedInterface,
  TvCombinedInterface,
  PosterImageSizesInterface,
  ProfileImageSizesInterface,

  MediaTypeEnum,
  Results,
  SearchService,

  PROFILE_IMAGE_SIZES,
  POSTER_IMAGE_SIZES,

} from '@app/core/';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;
    POSTER_IMAGE_SIZE: PosterImageSizesInterface;
    PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
    MEDIA_TYPE = MediaTypeEnum;
    results$:   Observable <
    Results <
      MovieCombinedInterface |
      PersonCombinedInterface |
      TvCombinedInterface
      >>;
    constructor(
        private searchService: SearchService,
    ) {
        this.POSTER_IMAGE_SIZE = POSTER_IMAGE_SIZES;
        this.PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
        this.stateCtrl = new FormControl();
        this.results$ = this.searchService.searchCombined(this.stateCtrl.valueChanges);
    }
    ngOnInit() {}
}
