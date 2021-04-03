import { TestBed } from '@angular/core/testing';

import { MemoServiceService } from './memo-service.service';

describe('MemoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoServiceService = TestBed.get(MemoServiceService);
    expect(service).toBeTruthy();
  });
});
