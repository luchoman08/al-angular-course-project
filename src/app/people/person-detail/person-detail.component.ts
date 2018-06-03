import { Component, OnInit } from '@angular/core';
import { Person, ProfileImageSizesInterface, PROFILE_IMAGE_SIZES } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  mode: string;
  PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
    this.mode = 'determinate';
    this.person = new Person();
   }
  ngOnInit() {
    this.route.data.subscribe(
      (data: { person: Person })  => {
        console.log(data);
        this.person = data.person;
      }
    );
  }

}
