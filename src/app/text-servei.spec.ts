import { TestBed } from '@angular/core/testing';

import { TextServei } from './text-servei';

describe('TextServei', () => {
  let service: TextServei;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextServei);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
