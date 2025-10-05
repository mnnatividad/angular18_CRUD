import { TestBed } from '@angular/core/testing';

import { ICrudsvcService } from './i-crudsvc.service';

describe('ICrudsvcService', () => {
  let service: ICrudsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICrudsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
