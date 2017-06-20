import { TestBed, inject } from '@angular/core/testing';

import { ADUserService } from './ad-user.service';

describe('ADUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ADUserService]
    });
  });

  it('should be created', inject([ADUserService], (service: ADUserService) => {
    expect(service).toBeTruthy();
  }));
});
