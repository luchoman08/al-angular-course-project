import { Component, OnInit, Input } from '@angular/core';
import { Crew, Cast, ImageService, ProfileImageSizes  } from '@app/core/';


@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit {
  image: string;
  @Input() credit: Cast|Crew;
  @Input() classes: string[];
  constructor(
    private imageService: ImageService) {

   }


  ngOnInit() {
        this.image = this.imageService.get(this.credit.profile_path, ProfileImageSizes.W45);
  }

}
