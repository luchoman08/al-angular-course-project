import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
export class FullScreenGalleryComponent implements OnInit {
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
  openPreviewImages(): void {
    this.onlyPreviewGallery.openPreview(0);
  }
  ngOnInit() {

    this.galleryImages = this.galleryImagesService.
    getFullScreenGalleryImages(this.images, this.mediaType, this.imageType, true);
  }

}
