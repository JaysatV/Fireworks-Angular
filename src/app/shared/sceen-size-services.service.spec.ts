/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SceenSizeServicesService } from './sceen-size-services.service';

describe('Service: SceenSizeServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceenSizeServicesService]
    });
  });

  it('should ...', inject([SceenSizeServicesService], (service: SceenSizeServicesService) => {
    expect(service).toBeTruthy();
  }));
});
