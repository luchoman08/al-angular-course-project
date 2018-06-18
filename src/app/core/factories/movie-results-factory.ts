import { BaseResultsFactoryInterface } from "@app/core/factories/base-results-factoryl.interface";
import { MovieFactory } from "@app/core/factories/movie-factory";
import { MovieInterface, Movie } from "@app/core/models";
import { ResultsInterface } from "@app/core/models/interfaces/results.interface";
export const defaultMovieResults: ResultsInterface<Movie> = {
    page: 1,
    total_results: 0,
    results: new Array<Movie>(),
    total_pages: 0
}

export class MovieResultsFactory implements BaseResultsFactoryInterface<Movie, MovieInterface> {
    factory: MovieFactory = new MovieFactory();
    make(resultsInterface: ResultsInterface<MovieInterface>) {
        let resultsMovie: ResultsInterface<Movie> = {
        page: resultsInterface.page ? resultsInterface.page :  defaultMovieResults.page,
        total_results: resultsInterface.total_results ? resultsInterface.total_results :  defaultMovieResults.total_results,
        results: resultsInterface.results ? this.factory.makeMultiple(resultsInterface.results) :  defaultMovieResults.results,
        total_pages: resultsInterface.total_pages ?   resultsInterface.total_pages :  defaultMovieResults.total_pages
    };
    return resultsMovie;
    }
}