import { BackgroundImageDirective } from './background-image.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ImageURLPipe } from '@app/shared/pipes';
describe('BackgroundImageDirective', () => {
  let el: ElementRef;
  let imageURLPipe: ImageURLPipe;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get']);
    TestBed.configureTestingModule({
      providers: [ElementRef, ImageURLPipe]
    });
    el = TestBed.get(ElementRef);
    imageURLPipe = TestBed.get(ImageURLPipe);
  });
  it('should create an instance', () => {
    const directive = new BackgroundImageDirective(el, imageURLPipe);
    expect(directive).toBeTruthy();
  });
});
