import { ImageSizeEnum } from '../enums';
import { ImageSizeValueModel } from '../image-sizes-values.model';
export interface ProfileImageSizesInterface {
  W45: ImageSizeValueModel;
  W185: ImageSizeValueModel;
  H632: ImageSizeValueModel;
  ORIGINAL: ImageSizeValueModel;
}

export const PROFILE_IMAGE_SIZES =  {
    W45: new ImageSizeValueModel(ImageSizeEnum.W45, 45, 67),
    W185: new ImageSizeValueModel(ImageSizeEnum.W185, 185, 277),
    H632: new ImageSizeValueModel(ImageSizeEnum.H632, 632, 984),
    ORIGINAL: new ImageSizeValueModel(ImageSizeEnum.ORIGINAL, -1, -1)
} as ProfileImageSizesInterface;
