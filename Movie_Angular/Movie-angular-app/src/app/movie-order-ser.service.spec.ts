import { TestBed } from '@angular/core/testing';

import { MovieOrderSerService } from './movie-order-ser.service';

describe('MovieOrderSerService', () => {
  let service: MovieOrderSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieOrderSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
