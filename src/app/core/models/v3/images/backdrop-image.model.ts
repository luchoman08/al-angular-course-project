import { ImageSize } from '../../enums/image-size.enum';
import { Image } from '../../abstract/image.abstract';
import { BackdropImageSizes } from '../../enums/backdrop-image-sizes.enum';
export class BackdropImage extends Image {
    constructor() {
        super();
        BackdropImage.sizes =  BackdropImageSizes ;
    }

}
