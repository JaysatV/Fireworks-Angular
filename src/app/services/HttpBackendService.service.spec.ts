/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpBackendServiceService } from './HttpBackendService.service';

describe('Service: HttpBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBackendServiceService]
    });
  });

  it('should ...', inject([HttpBackendServiceService], (service: HttpBackendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
