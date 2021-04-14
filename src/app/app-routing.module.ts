import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornadaModalComponent } from './jornada-modal/jornada-modal.component';
import { JornadaComponent } from './jornada/jornada.component';



const routes: Routes = [

  {"path": "","component":JornadaComponent},
  {"path": "c","component":JornadaModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
