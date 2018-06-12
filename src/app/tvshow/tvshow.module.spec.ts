import { TvshowModule } from './tvshow.module';

describe('TvshowModule', () => {
  let tvshowModule: TvshowModule;

  beforeEach(() => {
    tvshowModule = new TvshowModule();
  });

  it('should create an instance', () => {
    expect(tvshowModule).toBeTruthy();
  });
});
