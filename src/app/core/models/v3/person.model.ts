import { Gender } from '../enums/';
import { Image } from './image.model';

export class Person {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    profile_path: string;
    biography: string;
    images: { profiles: Image[]};
    birthday: string;
    deathdate: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;

}
