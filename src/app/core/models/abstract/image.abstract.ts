import { ImageSize } from '@app/core';

export abstract class ImageAbstract {
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
