import { TestBed } from '@angular/core/testing';

import { ServicioEducacionService } from './servicio-educacion.service';

describe('ServicioEducacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEducacionService = TestBed.get(ServicioEducacionService);
    expect(service).toBeTruthy();
  });
});
