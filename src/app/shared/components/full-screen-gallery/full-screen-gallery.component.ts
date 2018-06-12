import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxGalleryComponent, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

import {
  galleryOptionsFullScreenOnly,
  GalleryImagesService,

  MediaTypeEnum,

  Image,
  ImageTypeEnum
 } from '@app/core';

@Component({
  selector: 'app-full-screen-gallery',
  templateUrl: './full-screen-gallery.component.html',
  styleUrls: ['./full-screen-gallery.component.scss']
})
export class FullScreenGalleryComponent implements OnInit, OnChanges {
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;
  @Input() images: Image[];
  @Input() mediaType: MediaTypeEnum;
  @Input() sorted: boolean;
  @Input() imageType: ImageTypeEnum;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private galleryImagesService: GalleryImagesService
  ) {
    this.galleryImages = new Array<NgxGalleryImage>();
    this.galleryOptions = galleryOptionsFullScreenOnly;
   }
   initGalleryImages(): void {
    this.galleryImages = new Array<NgxGalleryImage>();
    this.galleryImages = this.galleryImagesService.
    getFullScreenGalleryImages(this.images, this.mediaType, this.imageType, true);
   }
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  ngOnInit() {
    this.initGalleryImages();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.initGalleryImages();

}

}
