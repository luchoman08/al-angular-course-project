import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ResultsInterface, Person, PeopleService } from '@app/core';
@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {
  peopleResults$: Observable<ResultsInterface<Person>>;
  people = new  Array<Person>();
  loading_results = false;
  totalPages: number;
  resultsLength: number;
  searchCtrl: FormControl;
  page: number;
  searchValueChages: Observable<string>;
  constructor(
    private _route: ActivatedRoute,
    private peopleService: PeopleService) {
    this.searchCtrl = new FormControl();
    this.page = 0;
    this.resultsLength = 20; // default page size
    this.searchValueChages = this.searchCtrl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged());
   }
   updateData() {
    this.peopleResults$ = this.peopleService.searchPeople(this.searchCtrl.value, this.page);
    this.peopleResults$.subscribe(
      (peopleResult: ResultsInterface<Person>) => {
        this.people = this.people.concat(peopleResult.results);
        this.totalPages = peopleResult.total_pages;
        this.loading_results = false;
        this.resultsLength = peopleResult.total_results;
        /** Preload next page  */
        this.preloadPage();
      }
    );
  }
  /** Preload next page in cache */
  preloadPage() {
    const nextPage = this.page + 1;
    if ( !(nextPage >= this.totalPages) ){
        this.peopleService.searchPeople(this.searchCtrl.value, nextPage);
      }
  }
  getNextPage() {
    if ( !(this.page >= this.totalPages) ){
    this.page = this.page + 1;
    this.loading_results = true;
    this.updateData();
    }
  }
  ngOnInit() {
    /** Update people after search value changes */
    this.searchValueChages.subscribe(()=>{
      this.people = new Array<Person>();
      this.page = 0;
      this.updateData();
    })
    /** Get data from people search resolver */
    this._route.data.subscribe((data: { peopleResult: ResultsInterface<Person> }) => {
    this.peopleResults$ = of(data.peopleResult);
    this.resultsLength = data.peopleResult.total_results;
    this.totalPages = data.peopleResult.total_pages;
    this.people = data.peopleResult.results;
  });
  }

}
