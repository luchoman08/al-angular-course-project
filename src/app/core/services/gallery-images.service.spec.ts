import { TestBed, inject } from '@angular/core/testing';

import { GalleryImagesService } from './gallery-images.service';

describe('GalleryImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryImagesService]
    });
  });

  it('should be created', inject([GalleryImagesService], (service: GalleryImagesService) => {
    expect(service).toBeTruthy();
  }));
});
