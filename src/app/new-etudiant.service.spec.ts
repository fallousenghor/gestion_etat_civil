import { TestBed } from '@angular/core/testing';

import { NewEtudiantService } from './new-etudiant.service';

describe('NewEtudiantService', () => {
  let service: NewEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
