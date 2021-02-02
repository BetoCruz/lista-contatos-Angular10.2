import { TestBed } from '@angular/core/testing';

import { ContatosDataBaseService } from './contatos-data-base.service';

describe('ContatosDataBaseService', () => {
  let service: ContatosDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
