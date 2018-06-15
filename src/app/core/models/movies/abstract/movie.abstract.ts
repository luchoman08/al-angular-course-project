import {
  KeywordsInterface,
  CompanyInterface,
  LanguageInterface,
  CountryInterface,
  TranslationInterface
} from '@app/core/models/interfaces';
import { Genre } from '@app/core/models/genre.model';
import { CreditsModel, Cast, Crew } from '@app/core/models/credits';
import { Video } from '@app/core/models/video.model';
import { Image } from '@app/core/models/image.model';
import { Review } from '@app/core/models/social';
import { Movie } from '@app/core/models/movies/movie.model';
import { Results } from '@app/core/models/results.model';

export abstract class MovieAbstract {
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
}
