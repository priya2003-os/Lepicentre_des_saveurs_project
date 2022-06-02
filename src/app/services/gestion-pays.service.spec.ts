import { TestBed } from '@angular/core/testing';

import { GestionPaysService } from './gestion-pays.service';

describe('GestionPaysService', () => {
  let service: GestionPaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
