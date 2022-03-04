import { TestBed } from '@angular/core/testing';

import { PortableTextService } from './portable-text.service';

describe('PortableTextService', () => {
  let service: PortableTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortableTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
