import { TestBed } from '@angular/core/testing';

import { SerachbookService } from './serachbook.service';

describe('SerachbookService', () => {
  let service: SerachbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerachbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
