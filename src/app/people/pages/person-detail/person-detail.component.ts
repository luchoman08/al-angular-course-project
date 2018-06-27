import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { FullScreenGalleryComponent } from '@app/shared';

import {
  Person,
  ImageTypeEnum,
  PersonCreditsCombinedModel,
  MediaTypeEnum,
  PeopleService,
  ProfileImageSizesInterface,
  PROFILE_IMAGE_SIZES
} from '@app/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @ViewChild('profilesGallery') profilesGallery: FullScreenGalleryComponent;
  person: Person;
  mode: string;
  profileImageType: ImageTypeEnum;
  PROFILE_IMAGE_SIZES: ProfileImageSizesInterface;
  personType: MediaTypeEnum;
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {
    this.profileImageType = ImageTypeEnum.PROFILE;
    this.personType = MediaTypeEnum.PERSON;
    this. PROFILE_IMAGE_SIZES = PROFILE_IMAGE_SIZES;
    this.person = new Person();
   }
  ngOnInit() {
    this.route.data.subscribe(
      (data: { person: Person })  => {
        this.person = data.person;
      }
    );
  }
  openProfileImages() {
  this.profilesGallery.openPreviewImages();
  }

}
