import {
  TvSeason,
  Image$,
  TvSeriesStatusEnum,
  Video
} from '@app/core/models';
import { TvSeriesTypeEnum } from '@app/core/models/enums/tvseries-type.enum';

export interface TvShowInterface {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number; // 0 to 10 value
  in_production: boolean;
  status: TvSeriesStatusEnum ;
  type: TvSeriesTypeEnum;
  poster_path: string;
  backdrop_path: string;
  seasons: TvSeason[];
  videos?: {results: Video[]};
  images?: { backdrops: Image$[], posters: Image$[]};
}
