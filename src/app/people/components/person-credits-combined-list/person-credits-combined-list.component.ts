import { Component, OnInit, Input } from '@angular/core';
import { PersonCreditsCombinedModel } from '@app/core';

@Component({
  selector: 'app-person-credits-combined-list',
  templateUrl: './person-credits-combined-list.component.html',
  styleUrls: ['./person-credits-combined-list.component.scss']
})
export class PersonCreditsCombinedListComponent implements OnInit {
  @Input() personCreditsCombined: PersonCreditsCombinedModel;
  constructor() { }

  ngOnInit() {
  }

}
