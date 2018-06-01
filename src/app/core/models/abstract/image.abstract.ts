import { ImageSize } from '../enums/image-size.enum';

export abstract class Image {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
    sizes: {};
    constructor() { }
}
