import { Component, OnInit } from '@angular/core';
import { Person } from '../../core/models/v3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  constructor(
    private route: ActivatedRoute
  ) {
    this.person = new Person();
   }

  ngOnInit() {
    this.route.data.subscribe(
      data  => {
        console.log(data)
        this.person = data.movie;
      }
    );
  }

}
