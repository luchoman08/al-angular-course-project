import {
    Image,
    Genre,
    Video,
    SpokenLanguage,
    ProductionCompany
  } from '../';

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
