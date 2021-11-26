import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarPeliculaComponent } from './crear-actualizar-pelicula.component';

describe('CrearActualizarPeliculaComponent', () => {
  let component: CrearActualizarPeliculaComponent;
  let fixture: ComponentFixture<CrearActualizarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActualizarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
