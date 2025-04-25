import { TestBed } from '@angular/core/testing';

import { GraphqlGeneralService } from './graph-ql.service';

describe('GraphQLService', () => {
  let service: GraphqlGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
