import { Component, OnInit } from '@angular/core';
import { PeopleService, Person, ResultsInterface } from '@app/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.scss']
})
export class PeopleHomeComponent implements OnInit {
  popularPeople$: Observable<Person[]>;
  constructor( private peopleService: PeopleService ) {
    this.popularPeople$ = new Observable<Person[]>();
   }

  ngOnInit() {
    this.popularPeople$ = this.peopleService.getPopular()
    .pipe( map((results: ResultsInterface<Person>) => {
      return results.results
    }));
  }

}
