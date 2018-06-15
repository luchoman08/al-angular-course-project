import { DefaultValues } from '@app/core/models/enums/coreDefaultValues.enum';
import { BaseFactory } from './base-factory.interface';
import { MovieInterface, Movie} from '../models';

export class MovieFactory implements BaseFactory < Movie, MovieInterface > {

make(movieInterface: MovieInterface): Movie {
    const movie: Movie = new Movie();
    return movie;
    }
}
