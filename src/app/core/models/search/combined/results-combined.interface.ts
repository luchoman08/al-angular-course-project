import { Results } from '../../results.model';
import { TvCombinedInterface } from '@app/core/models/search/combined/tv-combined.interface';
import { PersonCombinedInterface } from '@app/core/models/search/combined/person-combined.interface';
import { MovieCombinedInterface } from '@app/core/models/search/combined/movie-combined.interface';
export interface ResultsCombined extends Results<TvCombinedInterface | PersonCombinedInterface | MovieCombinedInterface> {

}
