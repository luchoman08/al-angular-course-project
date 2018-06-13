import { Crew } from './credits/movie-crew.model';
import { Cast } from './credits/movie-cast.model';
import { CreditsModel } from './credits';
import {
  Image,
  Genre,
  Video,
  Results
} from './';

import {
  MovieInterface,
  KeywordsInterface,
  TranslationInterface,
  CompanyInterface,
  CountryInterface,
  LanguageInterface
} from './interfaces';
import {  } from './results.model';
import { Review } from './social/review.model';

export class Movie implements MovieInterface {
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
    runtime: number;
    revenue: string;
    original_language?: string;
    keywords?: {keywords: KeywordsInterface[]};
    original_title: string;
    popularity: number; // between 0 and 10
    production_companies: CompanyInterface[];
    spoken_languages: LanguageInterface[];
    production_countries: CountryInterface[];
    video: boolean; // movie video preview available?
    video_count: number;
    genres?: Genre[];
    credits?: CreditsModel;
    videos?: {results: Video[]};
    images?: { backdrops: Image[], posters: Image[]};
    similar?: Results<Movie>;
    credis?: {id: string, cast: Cast[], crew: Crew[]}
    reviews?: Results<Review>;
    translations?: Results<TranslationInterface>;
    public static fromJSON(json: MovieInterface): Movie {
      const movie = Object.create(Movie.prototype);
      return Object.assign(movie, json);
      }
    public static sortMethod(movie1: Movie, movie2: Movie): number {
      return movie2.vote_average - movie1.vote_average;
    }
    public static sortReverseMethod(movie1: Movie, movie2: Movie): number {
      return movie1.vote_average - movie2.vote_average;
    }
    getVideoKeys(): string[] {
      if (this.videos) {
        return this.videos.results.map((video: Video) => video.key );
      } else {
        return new Array<string>();
      }
    }


}
