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
import { tap, map } from 'rxjs/operators';
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
    results$: Observable<
        ResultsInterface<
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
        this.results$ = this.searchService.searchCombined(this.stateCtrl.valueChanges)
            .pipe(
                map(data => {
                    if (data) {
                        /** Does not support tv  */
                        data.results = data.results.filter(result => result.media_type != this.MEDIA_TYPE.TV);
                        console.log(data);
                    }
                    return data;
                }
                ));

    }
    hideSearchAditionalSearch() {
        setTimeout(() => this.hideAditionalSearch = true, 300);
    }
    ngOnInit() { }
}