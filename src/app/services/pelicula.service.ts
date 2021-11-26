import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private httpClient: HttpClient) { }

  listarPeliculas() {
    return this.httpClient.get(baseURL);
  }

  agregarPelicula(body: any) {
    return this.httpClient.post(baseURL, body);
  }

  actualizarPelicula(body: any) {
    return this.httpClient.put(baseURL, body);
  }

  eliminarPelicula(id: number) {
    return this.httpClient.delete(baseURL + '/' + id)
  }
}
