import { TestBed } from '@angular/core/testing';

import { SkincycleService } from './skincycle.service';

describe('SkincycleService', () => {
  let service: SkincycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkincycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
