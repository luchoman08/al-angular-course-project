import { Gender } from '@app/core/';
import { Image } from '@app/core/';
export class Person {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    profile_path: string; // name of image to profile image
    biography: string;
    images: { profiles: Image[]};
    birthday: string;
    deathday: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;
}
