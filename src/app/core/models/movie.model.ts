import { Genre, Video,  SpokenLanguage, ProductionCompany } from '@app/core/models/';
import { Image } from '@app/core/images';
export class Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    imdb_id: string | null;
    backdrop_path: Image;
    genre_ids: number[];
    original_language?: string;
    original_title: string;
    popularity: number; // between 0 and 10
    production_companies: ProductionCompany[];
    spoken_languages: SpokenLanguage[];
    video: boolean; // movie video preview available?
    video_count: number;
    genres?: Genre[];
    videos?: {results: Video[]};
    images?: { backdrops: Image[], posters: Image[]};
}
