import { Directive, Input, ElementRef } from '@angular/core';
import { ImageSizeValueModel, AssetsService } from '@app/core';
import { ImageURLPipe } from '../pipes';

@Directive({
  selector: '[appProfileImage]'
})
export class ProfileImageDirective {
  @Input() path: string;
  @Input() size: ImageSizeValueModel;
  constructor( 
    private el: ElementRef,
    private assetsService: AssetsService,
    private imageURLPipe: ImageURLPipe) {

   }
   ngOnInit() {
    if (this.path) {
      this.el.nativeElement.src = this.imageURLPipe.transform(this.path, this.size);
    } else {
      this.el.nativeElement.src = this.assetsService.getDefaltProfileImageURL();
    }
   }

}
