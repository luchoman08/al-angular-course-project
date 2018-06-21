import { ZoomImageDirective } from './zoom-image.directive';
import { AssetsService } from '@app/core';
import { ElementRef, Renderer } from '../../../../node_modules/@angular/core';
import { ImageURLPipe } from '@app/shared/pipes';
import { TestBed } from '../../../../node_modules/@angular/core/testing';

describe('ZoomImageDirective', () => {
  let el: ElementRef;
  let renderer: Renderer;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get']);
    TestBed.configureTestingModule({
      providers: [ElementRef, Renderer]
    });
    el = TestBed.get(ElementRef);
    renderer = TestBed.get(Renderer);
  });
  it('should create an instance', () => {
    const directive = new ZoomImageDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
