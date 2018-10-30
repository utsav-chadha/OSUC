import { TestBed, inject } from '@angular/core/testing';

import { ExpertServiceService } from './expert-service.service';

describe('ExpertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertServiceService]
    });
  });

  it('should be created', inject([ExpertServiceService], (service: ExpertServiceService) => {
    expect(service).toBeTruthy();
  }));
});
