import { Directive, Input, ElementRef,  OnChanges } from '@angular/core';
import { AssetsService, ImageSizeValueModel, MediaTypeEnum } from '@app/core';
import { ImageURLPipe } from '@app/shared/pipes';

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
    this.el.nativeElement.width = this.size.width;

    if (this.path) {
      this.el.nativeElement.src = this.imageURLPipe.transform(this.path, this.size, MediaTypeEnum.MOVIE);
    } else {
      this.el.nativeElement.src = this.assetsService.getDefaultPosterImageURL();
    }
   }

}
