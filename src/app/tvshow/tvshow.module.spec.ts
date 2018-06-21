import { TvShowModule } from './tvshow.module';

describe('TvShowModule', () => {
  let tvshowModule: TvShowModule;

  beforeEach(() => {
    tvshowModule = new TvShowModule();
  });

  it('should create an instance', () => {
    expect(tvshowModule).toBeTruthy();
  });
});
