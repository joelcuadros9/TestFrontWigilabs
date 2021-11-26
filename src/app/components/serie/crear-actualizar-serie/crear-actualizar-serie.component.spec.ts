import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarSerieComponent } from './crear-actualizar-serie.component';

describe('CrearActualizarSerieComponent', () => {
  let component: CrearActualizarSerieComponent;
  let fixture: ComponentFixture<CrearActualizarSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActualizarSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
