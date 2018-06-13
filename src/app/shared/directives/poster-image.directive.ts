import { Directive, Input, ElementRef,  OnChanges } from '@angular/core';
import { AssetsService, ImageSizeValueModel } from '@app/core';
import { ImageURLPipe } from '../pipes';

@Directive({
  selector: '[appPosterImage]'
})
export class PosterImageDirective implements OnChanges {
  @Input() path: string;
  @Input() size: ImageSizeValueModel;
  constructor( 
    private el: ElementRef,
    private assetsService: AssetsService,
    private imageURLPipe: ImageURLPipe) {

   }
   ngOnChanges() {
     console.log('pana no');
    if (this.path) {
      this.el.nativeElement.src = this.imageURLPipe.transform(this.path, this.size);
    } else {
      this.el.nativeElement.src = this.assetsService.getDefaultPosterImageURL();
    }
   }

}
