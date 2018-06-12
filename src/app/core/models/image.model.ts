export class Image {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
    constructor() {}

    public static sortMethod(image1: Image, image2: Image): number {
      return image2.vote_average - image1.vote_average;
    }
}
