import { TestBed } from '@angular/core/testing';

import { DipartimentiService } from './dipartimenti.service';

describe('DipartimentiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DipartimentiService = TestBed.get(DipartimentiService);
    expect(service).toBeTruthy();
  });
});
