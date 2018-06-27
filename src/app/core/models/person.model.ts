import { Gender, Image } from './';
import { PersonInterface } from './interfaces';
import {
  PersonCreditsCombinedModel
} from './credits/';

export class Person implements PersonInterface {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    profile_path: string; // name of image to profile image
    biography: string;
    images?: { profiles: Image[]};
    birthday: string;
    deathday: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;
    tv_credits?: PersonCreditsCombinedModel;
    movie_credits?: PersonCreditsCombinedModel;
    public static sortMethod(person1: Person, person2: Person): number {
      return person2.popularity - person1.popularity;
    }
}
