import { TestBed } from '@angular/core/testing';

import { ListesCoursesService } from './listes-courses.service';

describe('ListesCoursesService', () => {
  let service: ListesCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
