/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserResultsService } from './user-results.service';

describe('Service: UserResults', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResultsService]
    });
  });

  it('should ...', inject([UserResultsService], (service: UserResultsService) => {
    expect(service).toBeTruthy();
  }));
});
