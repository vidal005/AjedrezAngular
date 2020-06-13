import { TestBed } from '@angular/core/testing';

import { RESTservicioService } from './restservicio.service';

describe('RESTservicioService', () => {
  let service: RESTservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
