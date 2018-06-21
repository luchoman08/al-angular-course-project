import { ProfileImageDirective } from './profile-image.directive';
import { ImageURLPipe } from '@app/shared/pipes';
import { ElementRef } from '@angular/core';
import { AssetsService } from '@app/core';
import { TestBed } from '@angular/core/testing';

describe('ProfileImageDirective', () => {
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
    const directive = new ProfileImageDirective(el, assetsService, imageURLPipe);
    expect(directive).toBeTruthy();
  });
});
