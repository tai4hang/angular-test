import { TestBed } from '@angular/core/testing';

import { Service0Service } from './service0.service';

describe('Service0Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service0Service = TestBed.get(Service0Service);
    expect(service).toBeTruthy();
  });
});
