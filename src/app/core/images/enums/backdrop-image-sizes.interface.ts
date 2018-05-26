import { ImageSize } from './image-size.enum';

export interface BackdropImageSizesInterface {
  W300: ImageSize.W300;
  W780: ImageSize.W780;
  W1280: ImageSize.W1280;
  ORIGINAL: ImageSize.ORIGINAL;
}

export const BackdropImageSizes =  {
  W300: ImageSize.W300,
  W780: ImageSize.W780,
  W1280: ImageSize.W1280,
  ORIGINAL: ImageSize.ORIGINAL
} as BackdropImageSizesInterface;
