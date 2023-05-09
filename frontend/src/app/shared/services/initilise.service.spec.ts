import { TestBed } from '@angular/core/testing';

import { InitiliseService } from './initilise.service';

describe('InitiliseService', () => {
  let service: InitiliseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiliseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
