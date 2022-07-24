import { TestBed } from '@angular/core/testing';

import { ProyectsDataService } from './proyects-data.service';

describe('ProyectsDataService', () => {
  let service: ProyectsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
