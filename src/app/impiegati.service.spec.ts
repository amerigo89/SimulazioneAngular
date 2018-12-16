import { TestBed } from '@angular/core/testing';

import { ImpiegatiService } from './impiegati.service';

describe('ImpiegatiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpiegatiService = TestBed.get(ImpiegatiService);
    expect(service).toBeTruthy();
  });
});
