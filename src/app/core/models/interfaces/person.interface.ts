import { Gender, Image } from '../';
import { PersonCreditsCombinedModel } from '../credits';
export interface PersonInterface {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    profile_path: string;
    biography: string;
    birthday: string;
    deathday: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;
    images?: { profiles: Image[]};
    tv_credits?: PersonCreditsCombinedModel;
    movie_credits?: PersonCreditsCombinedModel;
}
