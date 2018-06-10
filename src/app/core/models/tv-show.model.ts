import { Video, TvSeriesStatusEnum } from '@app/core/';
import { TvSeason, Image } from '@app/core/';
import { TvSeriesTypeEnum } from './enums/tvseries-type.enum';

export interface TVShowInterface {
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
    last_air_date: Date;
    backdrop_path: string;
    seasons: TvSeason[];
    videos?: {results: Video[]};
    images?: { backdrops: Image[], posters: Image[]};

    public static fromJSON(json: TVShowInterface) {
        const tvShow = Object.create(TVShow.prototype);
        return Object.assign(tvShow, json);
    }
    getVideoKeys(): string[] {
        if (this.videos) {
          return this.videos.results.map((video: Video) => video.key );
        } else {
          return new Array<string>();
        }
      }
}
