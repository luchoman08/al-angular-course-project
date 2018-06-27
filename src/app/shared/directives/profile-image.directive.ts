import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
import { ImageSizeValueModel, AssetsService, MediaTypeEnum } from '@app/core';
import { ImageURLPipe } from '@app/shared/pipes';
import { Person } from '@app/core/models/person.model';

@Directive({
  selector: '[appProfileImage]'
})
export class ProfileImageDirective implements OnChanges{
  @Input() path: string;
  @Input() size: ImageSizeValueModel;
  constructor( 
    private el: ElementRef,
    private assetsService: AssetsService,
    private imageURLPipe: ImageURLPipe) {

   }
   ngOnChanges() {
    if (this.path) {
      this.el.nativeElement.src = this.imageURLPipe.transform(this.path, this.size, MediaTypeEnum.PERSON);
    } else {
      this.el.nativeElement.src = this.assetsService.getDefaltProfileImageURL();
    }
   }

}
