import { MovieAbstract } from './abstract';
import { Video } from '@app/core/models';
export class Movie extends MovieAbstract  {

    public static sortMethod(movie1: Movie, movie2: Movie): number {
      return movie2.vote_average - movie1.vote_average;
    }

    public static sortReverseMethod(movie1: Movie, movie2: Movie): number {
      return movie1.vote_average - movie2.vote_average;
    }

    getVideoKeys(): string[] {
      if (this.videos) {
        return this.videos.results.map((video: Video) => video.key );
      } else {
        return new Array<string>();
      }
    }
}
