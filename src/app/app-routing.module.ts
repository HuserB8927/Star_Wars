import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {CharactersComponent} from "./component/characters/characters.component";
import {SimulationComponent} from "./component/simulation/simulation.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "characters", component: CharactersComponent},
  {path: "simulation", component: SimulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
