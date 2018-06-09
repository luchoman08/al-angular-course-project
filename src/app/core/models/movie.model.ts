import { Genre, Video,  SpokenLanguage, ProductionCompany } from './';
import { Image } from '@app/core/';

export interface MovieInterface {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    imdb_id: string | null;
    backdrop_path: string;
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

export class Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    imdb_id: string | null;
    backdrop_path: string;
    release_date: string;
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
    public static fromJSON(json: MovieInterface): Movie {
      const movie = Object.create(Movie.prototype);
      return Object.assign(movie, json);
      }
    getVideoKeys(): string[] {
      if (this.videos) {
        return this.videos.results.map((video: Video) => video.key );
      } else {
        return new Array<string>();
      }
    }

}
