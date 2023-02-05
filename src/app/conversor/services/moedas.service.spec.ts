import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moedas.service';

describe('ServiceService', () => {
  let service: MoedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
