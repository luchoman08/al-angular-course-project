import { Image } from '../../abstract/image.abstract';
import { ProfileImageSizes } from '../../enums/profile-image-sizes.enum';
export class ProfileImage extends Image {
    constructor() {
        super();
        ProfileImage.sizes =  ProfileImageSizes ;
    }

}
