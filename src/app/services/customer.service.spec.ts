import { TestBed } from '@angular/core/testing';

import { PersonajeService } from './customer.service';

describe('PersonajeService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
