import { ApiService } from '@app/core/services/shared';
import { TestBed, inject } from '@angular/core/testing';

import { KeywordService } from './keyword.service';

describe('KeywordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeywordService, ApiService]
    });
  });

  it('should be created', inject([KeywordService], (service: KeywordService) => {
    expect(service).toBeTruthy();
  }));
});
