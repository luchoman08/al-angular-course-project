import { ImageSizeEnum } from '@app/core/models/images/enums';
import { ImageSizeValueModel } from '@app/core/models/images/image-sizes-values.model';


export interface PosterImageSizesInterface {
    ORIGINAL: ImageSizeValueModel;
    W92: ImageSizeValueModel;
    W154: ImageSizeValueModel;
    W185: ImageSizeValueModel;
    W342: ImageSizeValueModel;
    W500: ImageSizeValueModel;
    W780:  ImageSizeValueModel;
}

export  const POSTER_IMAGE_SIZES = {
  ORIGINAL: new ImageSizeValueModel(ImageSizeEnum.ORIGINAL, -1, -1),
  W92: new ImageSizeValueModel(ImageSizeEnum.W92, 92, 92 * 1.5),
  W154: new ImageSizeValueModel(ImageSizeEnum.W154, 154, 154 * 1.5),
  W185: new ImageSizeValueModel(ImageSizeEnum.W185, 185, 185 * 1.5),
  W342: new ImageSizeValueModel(ImageSizeEnum.W342, 342, 342 * 1.5),
  W500: new ImageSizeValueModel(ImageSizeEnum.W500, 500, 500 * 1.5),
  W780: new ImageSizeValueModel(ImageSizeEnum.W780, 780, 780 * 1.5)
} as PosterImageSizesInterface ;
