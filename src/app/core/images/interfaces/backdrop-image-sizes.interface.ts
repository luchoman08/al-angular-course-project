import { ImageSize } from '@app/core/images/enums/image-size.enum';
import { ImageSizeValueModel } from '../models/image-sizes-values.model';

export interface BackdropImageSizesInterface {
  W300: ImageSizeValueModel;
  W780: ImageSizeValueModel;
  W1280: ImageSizeValueModel;
  ORIGINAL: ImageSizeValueModel;
}

export const BACKDROP_IMAGE_SIZES =  {

  W300 : new ImageSizeValueModel(ImageSize.W342, 300, 300 * 1.5),
  W780 : new ImageSizeValueModel(ImageSize.W780, 780, 780 * 1.5),
  W1280 : new ImageSizeValueModel(ImageSize.W1280, 1280, 1280 * 1.5),
  ORIGINAL : new ImageSizeValueModel(ImageSize.ORIGINAL, -1, -1),

} as BackdropImageSizesInterface;

