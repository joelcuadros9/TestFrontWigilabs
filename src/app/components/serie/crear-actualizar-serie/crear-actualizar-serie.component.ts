import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SerieService} from "../../../services/serie.service";

@Component({
  selector: 'app-crear-actualizar-serie',
  templateUrl: './crear-actualizar-serie.component.html',
  styleUrls: ['./crear-actualizar-serie.component.css']
})
export class CrearActualizarSerieComponent implements OnInit {

  serieForm: FormGroup;

  constructor(private serieService: SerieService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CrearActualizarSerieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.serieForm = this.formBuilder.group({
      id: [null],
      nombre: [null],
      genero: [null],
      temporada: [null],
      capitulo: [null],
      descripcion: [null]
    });
    console.log(this.data);
  }

  ngOnInit(): void {
    if(this.data != null){
      this.llenarDatos();
    }
  }

  agregarActualizarSerie() {
    if (this.serieForm.get('id')?.value == null){
      this.serieService.agregarSerie(this.serieForm.value).subscribe(
        serie => {
          console.log(serie);
          this.limpiarForm();
          this.dialogRef.close();
        }
      );
    }else{
      this.serieService.actualizarSerie(this.serieForm.value).subscribe(
        serie => {
          console.log(serie);
          this.limpiarForm();
          this.dialogRef.close();
        }
      );
    }
  }

  llenarDatos() {
    this.serieForm.get('id')?.setValue(this.data.id);
    this.serieForm.get('nombre')?.setValue(this.data.nombre);
    this.serieForm.get('genero')?.setValue(this.data.genero);
    this.serieForm.get('temporada')?.setValue(this.data.temporada);
    this.serieForm.get('capitulo')?.setValue(this.data.capitulo);
    this.serieForm.get('descripcion')?.setValue(this.data.descripcion);
  }

  limpiarForm() {
    this.serieForm.reset();
  }

}
