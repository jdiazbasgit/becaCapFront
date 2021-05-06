import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoJornadaComponent } from './empleado-jornada/empleado-jornada.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {"path":"","component":LoginComponent},
  {"path":"empleados-jornadas","component":EmpleadoJornadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

