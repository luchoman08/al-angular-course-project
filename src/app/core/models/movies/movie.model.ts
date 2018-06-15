import { MovieAbstract } from './abstract';
import { Video } from '@app/core/models';
import { FormGroup, FormControl } from '@angular/forms';
export class Movie extends MovieAbstract  {
    const form = new FormGroup({
      password: new FormControl('')
      passwordConfirm: new FormControl('')
    }, {validators: passwordMatchValidator, asyncValidators: otherValidator});
    public static sortMethod(movie1: Movie, movie2: Movie): number {
      this.form.
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
