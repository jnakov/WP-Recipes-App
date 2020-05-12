import { TestBed } from '@angular/core/testing';

import { RecipesMockService } from './recipes-mock.service';

describe('RecipesMockService', () => {
  let service: RecipesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
