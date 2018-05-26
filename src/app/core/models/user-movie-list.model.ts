import { Movie } from '@app/core/models/';
export class UserMovieList {
    id: number;
    name: string;
    created_by: string;
    item_count: number;
    poster_path: string;
    items: Movie [];

}
