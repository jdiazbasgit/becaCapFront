import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleado } from '../service.service';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
})
export class FormularioEmpleadoComponent {
  @Input() empleado: Empleado;

  constructor(
    public activeModal: NgbActiveModal,
    private service: ServiceService
  ) {}

  guardarEmpleado(f: NgForm) {
    if (this.empleado.id === 0)
      this.service.postDatosEmpleado(this.empleado).subscribe();
    else {
      //this.service.putDatos(this.empleado).subscribe()
    }
  }
}
