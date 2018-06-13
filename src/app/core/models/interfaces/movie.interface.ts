import { TranslationInterface } from './translation.interface';
import { Review } from '../social/review.model';
import { Movie } from '../movie.model';
import { Results } from '../results.model';
import {
    Image,
    Genre,
    Cast,
    Crew,
    Video
  } from '../';
import { KeywordsInterface } from './keyword.interface';
import { CountryInterface } from './country.interface';
import { CompanyInterface } from './company.interface';
import { LanguageInterface } from './language.interface';
import { CreditsModel } from '@app/core';

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
      runtime: number;
      revenue: string;
      production_countries: CountryInterface[];
      original_title: string;
      popularity: number; // between 0 and 10
      production_companies: CompanyInterface[];
      spoken_languages: LanguageInterface[];
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

  }
