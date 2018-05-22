import { Gender } from '../enums/';

export class Person {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathdate: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;

}
