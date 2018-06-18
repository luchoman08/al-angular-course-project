import { DefaultValues } from '@app/core/models/enums/coreDefaultValues.enum';
import { BaseFactory } from './base-factory.interface';
import { MovieInterface, Movie} from '../models';
export const movieDefaultObject: MovieInterface = {
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
    vote_average: 0,
    vote_count: 0,
    imdb_id: '',
    backdrop_path: '',
    release_date: '',
    genre_ids: null,
    runtime: 0,
    revenue: '0',
    original_language: '',
    keywords: null,
    original_title: '',
    popularity: 0,
    production_companies: null,
    spoken_languages: null,
    production_countries: null,
    video: null,
    video_count: 0,
    genres: null,
    credits: null,
    videos: null,
    images: null,
    similar: null,
    credis: null,
    reviews: null,
    translations: null
  };

  export class MovieFactory implements BaseFactory<Movie, MovieInterface> {
    defaultValuesObject: MovieInterface;
    constructor () {
        this.defaultValuesObject = movieDefaultObject;
    }
    make(movieInterface: MovieInterface): Movie {
      let movie: Movie = new Movie();
      movieInterface.id ? movie.id = movieInterface.id : movie.id = movieDefaultObject.id;
      movieInterface.title ? movie.title = movieInterface.title : movie.title = movieDefaultObject.title;
      movieInterface.overview ? movie.overview = movieInterface.overview : movie.overview = movieDefaultObject.overview;
      movieInterface.poster_path ? movie.poster_path = movieInterface.poster_path : movie.poster_path = movieDefaultObject.poster_path;
      movieInterface.vote_average ? movie.vote_average = movieInterface.vote_average : movie.vote_average = movieDefaultObject.vote_average;
      movieInterface.vote_count ? movie.vote_count = movieInterface.vote_count : movie.vote_count = movieDefaultObject.vote_count;
      movieInterface.imdb_id ? movie.imdb_id = movieInterface.imdb_id : movie.imdb_id = movieDefaultObject.imdb_id;
      movieInterface.backdrop_path ? movie.backdrop_path = movieInterface.backdrop_path : movie.backdrop_path = movieDefaultObject.backdrop_path;
      movieInterface.release_date ? movie.release_date = movieInterface.release_date : movie.release_date = movieDefaultObject.release_date;
      movieInterface.genre_ids ? movie.genre_ids = movieInterface.genre_ids : movie.genre_ids = movieDefaultObject.genre_ids;
      movieInterface.runtime ? movie.runtime = movieInterface.runtime : movie.runtime = movieDefaultObject.runtime;
      movieInterface.revenue ? movie.revenue = movieInterface.revenue : movie.revenue = movieDefaultObject.revenue;
      movieInterface.original_language ? movie.original_language = movieInterface.original_language : movie.original_language = movieDefaultObject.original_language;
      movieInterface.keywords ? movie.keywords = movieInterface.keywords : movie.keywords = movieDefaultObject.keywords;
      movieInterface.original_title ? movie.original_title = movieInterface.original_title : movie.original_title = movieDefaultObject.original_title;
      movieInterface.popularity ? movie.popularity = movieInterface.popularity : movie.popularity = movieDefaultObject.popularity;
      movieInterface.production_companies ? movie.production_companies = movieInterface.production_companies : movie.production_companies = movieDefaultObject.production_companies;
      movieInterface.spoken_languages ? movie.spoken_languages = movieInterface.spoken_languages : movie.spoken_languages = movieDefaultObject.spoken_languages;
      movieInterface.production_countries ? movie.production_countries = movieInterface.production_countries : movie.production_countries = movieDefaultObject.production_countries;
      movieInterface.video ? movie.video = movieInterface.video : movie.video = movieDefaultObject.video;
      movieInterface.video_count ? movie.video_count = movieInterface.video_count : movie.video_count = movieDefaultObject.video_count;
      movieInterface.genres ? movie.genres = movieInterface.genres : movie.genres = movieDefaultObject.genres;
      movieInterface.credits ? movie.credits = movieInterface.credits : movie.credits = movieDefaultObject.credits;
      movieInterface.videos ? movie.videos = movieInterface.videos : movie.videos = movieDefaultObject.videos;
      movieInterface.images ? movie.images = movieInterface.images : movie.images = movieDefaultObject.images;
      movieInterface.similar ? movie.similar = movieInterface.similar : movie.similar = movieDefaultObject.similar;
      movieInterface.credis ? movie.credis = movieInterface.credis : movie.credis = movieDefaultObject.credis;
      movieInterface.reviews ? movie.reviews = movieInterface.reviews : movie.reviews = movieDefaultObject.reviews;
      movieInterface.translations ? movie.translations = movieInterface.translations : movie.translations = movieDefaultObject.translations
      return movie;
    }
    makeMultiple(movieInterfaces: MovieInterface[]): Movie[] {
      return movieInterfaces.map(movieInterface => this.make(movieInterface));
    }
  
  }
  