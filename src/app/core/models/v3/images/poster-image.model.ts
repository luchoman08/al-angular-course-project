import { Image } from '../../abstract/image.abstract';
import { PosterImageSizes } from '../../enums/poster-image-sizes.enum';
export class PosterImage extends Image {
    constructor() {
        super();
        PosterImage.sizes =  PosterImageSizes ;
    }

}
