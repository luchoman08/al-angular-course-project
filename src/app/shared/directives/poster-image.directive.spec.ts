import { PosterImageDirective } from './poster-image.directive';
import { ElementRef } from '@angular/core';
import { AssetsService } from '@app/core';
import { ImageURLPipe } from '@app/shared/pipes';
import { TestBed } from '../../../../node_modules/@angular/core/testing';

describe('PosterImageDirective', () => {
  let el: ElementRef;
  let assetsService: AssetsService;
  let imageURLPipe: ImageURLPipe;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get']);
    TestBed.configureTestingModule({
      providers: [ElementRef, AssetsService, ImageURLPipe]
    });
    el = TestBed.get(ElementRef);
    assetsService = TestBed.get(AssetsService);
    imageURLPipe = TestBed.get(ImageURLPipe);
  });
  it('should create an instance', () => {
    const directive = new PosterImageDirective(el, assetsService, imageURLPipe);
    expect(directive).toBeTruthy();
  });
});
