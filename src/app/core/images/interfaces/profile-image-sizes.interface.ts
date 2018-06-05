import { ImageSize } from '@app/core/images/enums/image-size.enum';
import { ImageSizeValueModel } from '@app/core/images/models';
export interface ProfileImageSizesInterface {
  W45: ImageSizeValueModel;
  W185: ImageSizeValueModel;
  H632: ImageSizeValueModel;
  ORIGINAL: ImageSizeValueModel;
}

export const PROFILE_IMAGE_SIZES =  {
    W45: new ImageSizeValueModel(ImageSize.W45, 45, 67),
    W185: new ImageSizeValueModel(ImageSize.W185, 185, 277),
    H632: new ImageSizeValueModel(ImageSize.H632, 632, 984),
    ORIGINAL: new ImageSizeValueModel(ImageSize.ORIGINAL, -1, -1)
} as ProfileImageSizesInterface;
