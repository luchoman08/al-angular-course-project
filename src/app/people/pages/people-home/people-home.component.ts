import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '@app/core';
import { Observable } from 'rxjs';

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
    this.popularPeople$ = this.peopleService.getPopular();
  }

}
