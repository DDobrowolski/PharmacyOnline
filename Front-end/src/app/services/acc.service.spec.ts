import { TestBed, inject } from '@angular/core/testing';

import { AccService } from './acc.service';

describe('AccService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccService]
    });
  });

  it('should be created', inject([AccService], (service: AccService) => {
    expect(service).toBeTruthy();
  }));
});
