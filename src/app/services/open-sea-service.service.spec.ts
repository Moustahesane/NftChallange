import { TestBed } from '@angular/core/testing';

import { OpenSeaServiceService } from './open-sea-service.service';

describe('OpenSeaServiceService', () => {
  let service: OpenSeaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSeaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
