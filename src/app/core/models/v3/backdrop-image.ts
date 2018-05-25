import { ImageSize } from "../enums/image-size.enum";
import { Image } from "../abstract/image.abstract"
class BackdropImage extends Image {
    constructor(){
        super();
        this.sizes = {
            W300 : ImageSize.W300,
            W780 : ImageSize.W780,
            W1280: ImageSize.W1280,
            ORIGINAL : ImageSize.ORIGINAL
        }
    }
}