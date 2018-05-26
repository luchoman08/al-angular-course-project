import { ImageSize } from './image-size.enum';
/*
export enum PosterImageSizes {
    W92 = ImageSize.W92,
    W154 = ImageSize.W154,
    W185= ImageSize.W185,
    W342 = ImageSize.W342,
    W500 = ImageSize.W500,
    W780= ImageSize.W780,
    ORIGINAL = ImageSize.ORIGINAL
}
*/
export interface PosterImageSizesInterface {
  W92: string;
  W154: string;
  W185: string;
  W342: string;
  W500: string;
  W780: string;
  ORIGINAL: string;
}
export const PosterImageSizes =  {
  W92: ImageSize.W92,
  W154: ImageSize.W154,
  W185: ImageSize.W185,
  W342: ImageSize.W342,
  W500: ImageSize.W500,
  W780: ImageSize.W780,
  ORIGINAL: ImageSize.ORIGINAL
} as PosterImageSizesInterface;
