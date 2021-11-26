import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) { }

  listarSeries() {
    return this.httpClient.get(baseURL);
  }

  agregarSerie(body: any) {
    return this.httpClient.post(baseURL, body);
  }

  actualizarSerie(body: any) {
    return this.httpClient.put(baseURL, body);
  }

  eliminarSerie(id: number) {
    return this.httpClient.delete(baseURL + '/' + id)
  }
}
