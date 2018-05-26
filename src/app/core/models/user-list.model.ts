import { TVShow, Movie} from '@app/core';
import { ProductionCompany } from '@app/core/models/production-company.model';
/**
 * Api v4
 * User list, than allow have private lists for save
 * movies and TV Series
 */
export class UserList {
    id: number;
    description: string;
    created_by: { gravatar_hash: string, name: string, username: string };
    average_rating: number;
    comments: any[];
    total_results: number;
    poster_path: string;
    results: Array<Movie|TVShow>;
    backdrop_path: string;
    public: boolean;

}
