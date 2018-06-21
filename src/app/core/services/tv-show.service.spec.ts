import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '@app/core/services/shared';
import { TestBed, inject } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [TvShowService, ApiService]
    });
  });

  it('should be created', inject([TvShowService], (service: TvShowService) => {
    expect(service).toBeTruthy();
  }));
});
