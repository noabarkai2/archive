import { TestBed } from '@angular/core/testing';

import { HomepageDataGetterService } from './homepage-data-getter.service';

describe('HomepageDataGetterService', () => {
  let service: HomepageDataGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageDataGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
