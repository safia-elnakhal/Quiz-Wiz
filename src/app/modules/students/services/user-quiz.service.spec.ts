/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserQuizService } from './user-quiz.service';

describe('Service: UserQuiz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserQuizService]
    });
  });

  it('should ...', inject([UserQuizService], (service: UserQuizService) => {
    expect(service).toBeTruthy();
  }));
});
