import { Directive, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { AssetsService, ImageSizeValueModel, MediaTypeEnum } from '@app/core';
import { ImageURLPipe } from '@app/shared/pipes';

@Directive({
  selector: '[appPosterImage]'
})
export class PosterImageDirective implements OnChanges {
  @Input() path: string;
  @Input() size: ImageSizeValueModel;
  /** Keep default size defined by `size` Input argument or not */
  @Input() default_size?: boolean;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private assetsService: AssetsService,
    private imageURLPipe: ImageURLPipe) {

  }
  ngOnChanges() {
    if ( this.default_size ) {
      this.renderer.setStyle(this.el.nativeElement, 'min-width', this.size.width + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'min-height', this.size.height + 'px');
    }
    if (this.path) {
      this.renderer.setProperty(this.el.nativeElement, 'src', this.imageURLPipe.transform(this.path, this.size, MediaTypeEnum.MOVIE));
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'src', this.assetsService.getDefaultPosterImageURL());
    }
  }

}
