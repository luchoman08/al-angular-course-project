import { Video } from '@app/core/models/';
export class TVShow {
    id: number;
    name: string;
    overview: string;
    popularity: number; // 0 to 10 value
    in_production: boolean;
    poster_path: string;
    backdrop_path: string;
    videos: Video[];
}
