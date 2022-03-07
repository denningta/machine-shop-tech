import { TestBed } from '@angular/core/testing';

import { AnimateOnScrollService } from './animate-on-scroll.service';

describe('AnimateOnScrollService', () => {
  let service: AnimateOnScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateOnScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
