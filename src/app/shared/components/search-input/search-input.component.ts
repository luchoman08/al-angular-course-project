import { PeopleService } from '@app/core/services/people.service';
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
  ResultsInterface,
  SearchService,

  PROFILE_IMAGE_SIZES,
  POSTER_IMAGE_SIZES,

} from '@app/core';
import { tap } from 'rxjs/operators';
import { MovieService } from '@app/core/services';
import { EMPTY_SEARCH_SYMBOL } from '@app/core';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    stateCtrl: FormControl;
    mediaSearch: MediaTypeEnum;
    hideAditionalSearch: boolean;
    EMPTY_SEARCH_SYMBOL: string;
    filteredStates: Observable<any[]>;
    POSTER_IMAGE_SIZE: PosterImageSizesInterface;
    PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
    MEDIA_TYPE = MediaTypeEnum;
    results$:   Observable <
    ResultsInterface <
      MovieCombinedInterface |
      PersonCombinedInterface |
      TvCombinedInterface
      >>;
    constructor(
        private searchService: SearchService,
        private moviesServie: MovieService,
        private peopleService: PeopleService
    ) {
        this.hideAditionalSearch = true;
        this.POSTER_IMAGE_SIZE = POSTER_IMAGE_SIZES;
        this.PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
        this.EMPTY_SEARCH_SYMBOL = EMPTY_SEARCH_SYMBOL
        this.stateCtrl = new FormControl();
        this.results$ = this.searchService.searchCombined(this.stateCtrl.valueChanges);

    }
    selectSearchMovies() {
        this.mediaSearch = this.MEDIA_TYPE.MOVIE;
    }
    hideSearchAditionalSearch(){
        setTimeout(()=> this.hideAditionalSearch = true, 300);
    }
    selectSearchPeople(){
        this.mediaSearch = this.MEDIA_TYPE.PERSON;
    }
    ngOnInit() {}
}