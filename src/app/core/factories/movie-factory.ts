import{DefaultValues}from'@app/core/models/enums/coreDefaultValues.enum';
import { BaseFactory } from "./base-factory.interface";
import { MovieInterface, Movie} from'../models';

export class MovieFactory implements BaseFactory<Movie,MovieInterface>{
public defaultValuesObject : MovieInterface;
constructor(){
this.defaultValuesObject.id = DefaultValues.number;
this.defaultValuesObject.title = DefaultValues.string;
this.defaultValuesObject.overview = DefaultValues.string;
this.defaultValuesObject.poster_path = DefaultValues.string;
this.defaultValuesObject.vote_average = DefaultValues.number;
this.defaultValuesObject.vote_count = DefaultValues.number;
this.defaultValuesObject.imdb_id = DefaultValues.string;
this.defaultValuesObject.backdrop_path = DefaultValues.string;
this.defaultValuesObject.release_date = null;
this.defaultValuesObject.genre_ids = new Array<number>();
this.defaultValuesObject.runtime = DefaultValues.number;
this.defaultValuesObject.revenue = DefaultValues.string;
this.defaultValuesObject.original_language = DefaultValues.string;

/* this.defaultValuesObject.keywords?
this.defaultValuesObject.original_title = DefaultValues.string;
this.defaultValuesObject.popularity 
this.defaultValuesObject.production_companies
this.defaultValuesObject.spoken_languages
this.defaultValuesObject.production_countries
this.defaultValuesObject.video
this.defaultValuesObject.video_count
this.defaultValuesObject.genres?
this.defaultValuesObject.credits?
this.defaultValuesObject.videos?
this.defaultValuesObject.images?
this.defaultValuesObject.similar?
this.defaultValuesObject.credis?
this.defaultValuesObject.reviews?
this.defaultValuesObject.translations? */
}
make(movieInterface: MovieInterface): Movie{
    const movie :Movie = new Movie();
    return movie;
    }
}