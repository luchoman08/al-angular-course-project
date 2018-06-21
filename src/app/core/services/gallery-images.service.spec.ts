import { ImageURLPipe } from './../../shared/pipes/imagesURL.pipe';
import { TestBed, inject } from '@angular/core/testing';

import { GalleryImagesService } from './gallery-images.service';

describe('GalleryImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryImagesService, ImageURLPipe],
    });
  });

  it('should be created', inject([GalleryImagesService], (service: GalleryImagesService) => {
    expect(service).toBeTruthy();
  }));
});
