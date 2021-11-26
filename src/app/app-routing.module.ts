import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./components/inicio/inicio.component";
import {PeliculaComponent} from "./components/pelicula/pelicula.component";
import {SerieComponent} from "./components/serie/serie.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'pelicula', component : PeliculaComponent},
  {path : 'serie', component : SerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
