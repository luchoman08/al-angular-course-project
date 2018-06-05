import { ImageSizeValueInterface } from './interfaces';

export class ImageSizeValueModel implements ImageSizeValueInterface {
  name: string;
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
}
