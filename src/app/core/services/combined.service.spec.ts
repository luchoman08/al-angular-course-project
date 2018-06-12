import { TestBed, inject } from '@angular/core/testing';

import { CombinedService } from './combined.service';

describe('CombinedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombinedService]
    });
  });

  it('should be created', inject([CombinedService], (service: CombinedService) => {
    expect(service).toBeTruthy();
  }));
});
