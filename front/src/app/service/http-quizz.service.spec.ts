import { TestBed } from '@angular/core/testing';

import { HttpQuizzService } from './http-quizz.service';

describe('HttpQuizzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpQuizzService = TestBed.get(HttpQuizzService);
    expect(service).toBeTruthy();
  });
});
