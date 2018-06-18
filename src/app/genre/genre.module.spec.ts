import { GenreModule } from './genre.module';

describe('GenreModule', () => {
  let genreModule: GenreModule;

  beforeEach(() => {
    genreModule = new GenreModule();
  });

  it('should create an instance', () => {
    expect(genreModule).toBeTruthy();
  });
});
