import { TestBed } from '@angular/core/testing';

import { MarketServiceService } from './market-service.service';

describe('MarketServiceService', () => {
  let service: MarketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
