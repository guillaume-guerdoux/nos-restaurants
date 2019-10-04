import { TestBed } from '@angular/core/testing';

import { GoogleServicesService } from './google-services.service';

describe('GoogleServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleServicesService = TestBed.get(GoogleServicesService);
    expect(service).toBeTruthy();
  });
});
