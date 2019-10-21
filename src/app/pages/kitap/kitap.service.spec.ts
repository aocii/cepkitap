import { TestBed } from '@angular/core/testing';

import { KitapService } from './kitap.service';

describe('KitapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitapService = TestBed.get(KitapService);
    expect(service).toBeTruthy();
  });
});
