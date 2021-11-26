import { Component, OnInit } from '@angular/core';
import {PeliculaService} from "../../services/pelicula.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarPeliculaComponent} from "./crear-actualizar-pelicula/crear-actualizar-pelicula.component";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  dataSource: any;

  constructor(private peliculaService: PeliculaService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarPeliculas();
  }

  listarPeliculas() {
    this.peliculaService.listarPeliculas().subscribe(
      pelicula => {
        console.log(pelicula);
        this.dataSource = pelicula;
      }
    );
  }

  editarPelicula(_data: any) {
    const dialogRef = this.dialog.open(CrearActualizarPeliculaComponent, {data: _data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listarPeliculas();
    });
  }

  eliminarPelicula(id: number) {
    this.peliculaService.eliminarPelicula(id).subscribe(
      pelicula => {
        this.listarPeliculas();
      }
    );
  }

  abrirDialogo() {
    const dialogRef = this.dialog.open(CrearActualizarPeliculaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listarPeliculas();
    });
  }

}
