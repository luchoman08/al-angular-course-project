import { Component, OnInit } from '@angular/core';
import { Person } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '@app/core/services/image.service';
import { ProfileImageSizes } from '@app/core/images/enums';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  mode: string;
  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.mode = 'determinate';
    this.person = new Person();
   }
   get profileImage() {
     console.log('una vez y otra mas ');
     return this.imageService.get(this.person.profile_path,
       ProfileImageSizes.W154);
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
