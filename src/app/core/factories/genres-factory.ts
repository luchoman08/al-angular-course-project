import { GenreInterface, Genre } from "@app/core/models";
import { BaseFactory } from "@app/core/factories/base-factory.interface";

export const defaultValuesGenre: GenreInterface = {
    id: 0,
    name: ''
};

export class GenreFactory implements BaseFactory<Genre, GenreInterface> {
    defaultValuesObject: GenreInterface = defaultValuesGenre;
    /**
     * Make instance of `Genre` from `GenreInterface` instance, and initialize
     * in a default value if does not exist in the incoming interface
     * @param {GenreInterface} genreInterface
     * @returns {Genre}
     * @memberof GenreFactory
     */
    make(genreInterface: GenreInterface): Genre {
        let genre: Genre = new Genre();
        genreInterface.id ? genre.id = genreInterface.id : genre.id = defaultValuesGenre.id;
        genreInterface.name ? genre.name = genreInterface.name : genre.name = defaultValuesGenre.name
        return genreInterface
    }
    makeMultiple(genreInterfaces: GenreInterface[]): Genre[] {
        return genreInterfaces.map( genreInterface => this.make(genreInterface));
    }
}