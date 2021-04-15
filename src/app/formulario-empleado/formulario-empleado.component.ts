import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleado } from '../service.service';


@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html'
})
export class FormularioEmpleadoComponent {
  @Input() empleado: Empleado;
  constructor(public activeModal: NgbActiveModal) {}

}
