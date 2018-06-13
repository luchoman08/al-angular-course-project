import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { AssetsService, ImageSizeValueModel } from '@app/core';
import { ImageURLPipe } from '../pipes';

@Directive({
  selector: '[appPosterImage]'
})
export class PosterImageDirective implements OnInit {
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
      this.el.nativeElement.src = this.assetsService.getDefaultPosterImageURL();
    }
   }

}
