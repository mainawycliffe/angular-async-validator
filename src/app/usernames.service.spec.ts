import { TestBed } from '@angular/core/testing';

import { UsernamesService } from './usernames.service';

describe('UsernamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernamesService = TestBed.get(UsernamesService);
    expect(service).toBeTruthy();
  });
});
