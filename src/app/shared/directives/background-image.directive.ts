import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
import { ImageSizeValueModel } from '@app/core';
import { ImageURLPipe } from '@app/shared/pipes';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnChanges{
  @Input() path: string;
  @Input() size: ImageSizeValueModel;
  @Input() blurred: boolean;
  constructor(
    private el: ElementRef,
    private imageURLPipe: ImageURLPipe) {

   }
   ngOnChanges() {
    const imgURL = this.imageURLPipe.transform(this.path, this.size);

    if ( this.blurred )  {
      if ( this.path !== '') {
     this.el.nativeElement.style.background = `
    linear-gradient(
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
      ), url('${imgURL}')`;
    } else{
      this.el.nativeElement.style.background = `
      linear-gradient(
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
        )`;
    }
      } else {
        this.el.nativeElement.style.backgroundImage = `url(${imgURL})`;
      }
      this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
      this.el.nativeElement.style.backgroundSize = 'cover';
      this.el.nativeElement.style.width = '100%';
   }

}
