import { TestBed } from '@angular/core/testing';

import { OpponentsService } from './opponents.service';

describe('OpponentsService', () => {
  let service: OpponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
