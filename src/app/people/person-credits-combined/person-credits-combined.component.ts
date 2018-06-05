import { Component, OnInit, Input } from '@angular/core';
import { PersonCreditsCombinedModel } from '@app/people/models/person-credits-combined.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-credits-combined',
  templateUrl: './person-credits-combined.component.html',
  styleUrls: ['./person-credits-combined.component.scss']
})
export class PersonCreditsCombinedComponent implements OnInit {
  @Input() personCreditsCombined$: Observable<PersonCreditsCombinedModel>;
  constructor() { }

  ngOnInit() {
  }

}
