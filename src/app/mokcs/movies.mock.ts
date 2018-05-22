import { Movie } from '../core/models/v3/';
import * as movies_json from './json/movies.json';
export const MOVIES: Movie[] = (<Movie[]> movies_json);
