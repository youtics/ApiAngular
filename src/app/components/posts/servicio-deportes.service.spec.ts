import { TestBed } from '@angular/core/testing';

import { ServicioDeportesService } from './servicio-deportes.service';

describe('ServicioDeportesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioDeportesService = TestBed.get(ServicioDeportesService);
    expect(service).toBeTruthy();
  });
});
