import { TestBed } from '@angular/core/testing';

import { UrlHandlerServiceService } from './url-handler-service.service';

describe('UrlHandlerServiceService', () => {
  let service: UrlHandlerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
