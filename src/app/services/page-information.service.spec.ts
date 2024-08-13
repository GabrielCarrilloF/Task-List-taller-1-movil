import { TestBed } from '@angular/core/testing';

import { PageInformationService } from './page-information.service';

describe('PageInformationService', () => {
  let service: PageInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
