import { TestBed, inject } from '@angular/core/testing';

import { FactoriesService } from './factories.service';

describe('FactoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoriesService]
    });
  });

  it('should be created', inject([FactoriesService], (service: FactoriesService) => {
    expect(service).toBeTruthy();
  }));
});
