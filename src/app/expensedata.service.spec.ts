import { TestBed } from '@angular/core/testing';

import { ExpensedataService } from './expensedata.service';

describe('ExpensedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensedataService = TestBed.get(ExpensedataService);
    expect(service).toBeTruthy();
  });
});
