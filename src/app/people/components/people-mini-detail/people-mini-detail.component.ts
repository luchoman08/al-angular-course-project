import { Component, OnInit, Input } from '@angular/core';
import { Person, PROFILE_IMAGE_SIZES } from '@app/core';

@Component({
  selector: 'app-people-mini-detail',
  templateUrl: './people-mini-detail.component.html',
  styleUrls: ['./people-mini-detail.component.scss']
})
export class PeopleMiniDetailComponent implements OnInit {
  @Input() person: Person;
  PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
  constructor() { }

  ngOnInit() {
  }

}
