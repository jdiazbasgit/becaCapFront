import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { JornadaModalComponent } from './jornada-modal/jornada-modal.component';
import { JornadaComponent } from './jornada/jornada.component';

const routes: Routes = [{
  "path":"", "component": JornadaComponent},
  {"path":"c", "component": JornadaModalComponent
}];
=======
import { JornadaComponent } from './jornada/jornada.component';



const routes: Routes = [

  {"path": "","component":JornadaComponent}
];




>>>>>>> e4fee7725320999665ca492165b58ee742e9881a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
