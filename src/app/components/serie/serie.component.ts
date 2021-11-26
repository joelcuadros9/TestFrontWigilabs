import { Component, OnInit } from '@angular/core';
import {SerieService} from "../../services/serie.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarSerieComponent} from "./crear-actualizar-serie/crear-actualizar-serie.component";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  dataSource: any;

  constructor(private serieService: SerieService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarSeries();
  }

  listarSeries() {
    this.serieService.listarSeries().subscribe(
      serie => {
        console.log(serie);
        this.dataSource = serie;
      }
    );
  }

  editarSerie(_data: any) {
    const dialogRef = this.dialog.open(CrearActualizarSerieComponent, {data: _data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listarSeries();
    });
  }

  eliminarSerie(id: number){
    this.serieService.eliminarSerie(id).subscribe(
      serie => {
        this.listarSeries();
      }
    );
  }

  abrirDialogo() {
    const dialogRef = this.dialog.open(CrearActualizarSerieComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listarSeries();
    });
  }

}
