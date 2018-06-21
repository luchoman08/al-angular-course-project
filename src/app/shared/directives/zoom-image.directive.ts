import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appZoomImage]'
})
export class ZoomImageDirective {
  @Input() index?: number;
  @Input() number_of_elements?:  number;
  @Input() align_top_left?: boolean;
  @Input() position_hover: string;
  @Input() zoom_value?: number;
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}
  /**
   * In case than the image is in a vertical list, is the first element and are more than 1 elements 
   * applyFirst return true
   */
  private isTheFirstOneOfMoreThanTree(): boolean {
    return ( (this.index === 0 ) &&  ( this.number_of_elements > 3 ) );
  }
  private isTheLastOfMoreThanTwo(): boolean{
    return ( (this.index === ( this.number_of_elements -1 ) ) && ( this.number_of_elements > 2 ) );
  }
  @HostListener('mouseover') onmouseover(){
    this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'transform .1s');
    this.renderer.setElementStyle(this.el.nativeElement, 'z-index', '1');
    if ( this.align_top_left ) {
      this.renderer.setElementStyle(this.el.nativeElement, 'transform-origin', 'left top');
    }
    if ( this.position_hover ) {
      this.renderer.setElementStyle(this.el.nativeElement, 'position', this.position_hover);
    }
    if ( this.index && this.number_of_elements) {
      if( this.isTheFirstOneOfMoreThanTree() ) {
        this.renderer.setElementStyle(this.el.nativeElement, 'margin-top', '10px');
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(2.0)');
      }
      if( this.isTheLastOfMoreThanTwo() ) {
        this.renderer.setElementStyle(this.el.nativeElement, 'margin-top', '-30px');
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(1.8)');
      } else {
        this.renderer.setElementStyle(this.el.nativeElement, 'margin-top', '-30px');
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(2.5)');
      }
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(2.5)');
    }
  }
  @HostListener('mouseout') onmousedown(){
    this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setElementStyle(this.el.nativeElement, 'z-index', '0');
    if ( this.position_hover ) {
     this.renderer.setElementStyle(this.el.nativeElement, 'position', 'initial');
    }    
    if ( this.index ) {
      this.renderer.setElementStyle(this.el.nativeElement, 'margin-top', '0px');
    }
  }

}
