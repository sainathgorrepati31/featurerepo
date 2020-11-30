import { TestBed } from '@angular/core/testing';

import { FeatureserviceService } from './featureservice.service';

describe('FeatureserviceService', () => {
  let service: FeatureserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
