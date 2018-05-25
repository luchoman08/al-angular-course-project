import { ImageSize } from '../enums/image-size.enum';
import { Image } from '../abstract/image.abstract';
class PosterImage extends Image {
    constructor() {
        super();
        PosterImage.sizes = {
            W92 : ImageSize.W92,
            W154 : ImageSize.W154,
            W185: ImageSize.W185,
            W342 : ImageSize.W342,
            W500: ImageSize.W500,
            W780: ImageSize.W780,

        };
    }
}
