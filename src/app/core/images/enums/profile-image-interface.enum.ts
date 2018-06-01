import { ImageSize } from './image-size.enum';
export interface ProfileImageSizesInterface {
  W45: string;
  W185: string;
  H632: string;
  ORIGINAL: string;
}

export const ProfileImageSizes =  {
    W45: ImageSize.W45,
    W185: ImageSize.W185,
    H632: ImageSize.H632,
    ORIGINAL: ImageSize.ORIGINAL
} as ProfileImageSizesInterface;
