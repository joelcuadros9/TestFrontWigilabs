import {Component, Inject, OnInit} from '@angular/core';
import {PeliculaService} from "../../../services/pelicula.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-crear-actualizar-pelicula',
  templateUrl: './crear-actualizar-pelicula.component.html',
  styleUrls: ['./crear-actualizar-pelicula.component.css']
})
export class CrearActualizarPeliculaComponent implements OnInit {

  peliculaForm: FormGroup;

  constructor(private peliculaService: PeliculaService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CrearActualizarPeliculaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.peliculaForm = this.formBuilder.group({
      id: [null],
      nombre: [null],
      genero: [null],
      descripcion: [null]
    });
    console.log(this.data);
  }

  ngOnInit(): void {
    if(this.data != null){
      this.llenarDatos();
    }
  }

  agregarActualizarPelicula() {
    if (this.peliculaForm.get('id')?.value == null){
      this.peliculaService.agregarPelicula(this.peliculaForm.value).subscribe(
        pelicula => {
          console.log(pelicula);
          this.limpiarForm();
          this.dialogRef.close();
        }
      );
    }else{
      this.peliculaService.actualizarPelicula(this.peliculaForm.value).subscribe(
        pelicula => {
          console.log(pelicula);
          this.limpiarForm();
          this.dialogRef.close();
        }
      );
    }
  }

  llenarDatos() {
    this.peliculaForm.get('id')?.setValue(this.data.id);
    this.peliculaForm.get('nombre')?.setValue(this.data.nombre);
    this.peliculaForm.get('genero')?.setValue(this.data.genero);
    this.peliculaForm.get('descripcion')?.setValue(this.data.descripcion);
  }

  limpiarForm() {
    this.peliculaForm.reset();
  }

}
