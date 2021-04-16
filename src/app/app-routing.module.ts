import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornadaComponent } from './jornada/jornada.component';



const routes: Routes = [

  {"path": "","component":JornadaComponent},
  {"path": "j","component":JornadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
