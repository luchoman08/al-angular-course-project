import { ImageSize } from './image-size.enum';
export interface ProfileImageSizesInterface {
  W92: string;
  W154: string;
  H632: string;
  ORIGINAL: string;
}

export const ProfileImageSizes =  {
    W92: ImageSize.W45,
    W154: ImageSize.W185,
    H632: ImageSize.H632,
    ORIGINAL: ImageSize.ORIGINAL
} as ProfileImageSizesInterface;
