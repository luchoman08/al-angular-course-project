import { Video, TvSeriesStatusEnum } from '@app/core/';
import { TvSeason, Image } from '@app/core/';
import { TvSeriesTypeEnum } from './enums/tvseries-type.enum';
export class TVShow {
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
    images?: { backdrops: Image[], posters: Image[]};
}
