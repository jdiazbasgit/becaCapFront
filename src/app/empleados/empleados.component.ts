import { Component, OnInit } from '@angular/core';
import { Empleado, ServiceService, Jornada } from '../service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioEmpleadoComponent } from '../formulario-empleado/formulario-empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(
    private service: ServiceService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getEmpleados(this.empleados);
  }

  getEmpleados(empleados: Empleado[]) {
    this.service.getDatosEmpleado().subscribe(function (datos: any) {
      datos.forEach((element: any) => {
        let empleado: Empleado;
        empleado = new Empleado(
          element.id,
          element.nombre,
          element.apellidos,
          element.dni,
          element.identificador,
          element.fecha_alta,
          element.fecha_baja,
          element.jornada
        );
        empleados.push(empleado);
      });
    });
  }

  open(empleado?: Empleado) {
    const modalRef = this.modalService.open(FormularioEmpleadoComponent);
    modalRef.componentInstance.empleado =
      empleado ||
      new Empleado(
        0,
        '',
        '',
        '',
        '',
        null,
        null,
        new Jornada(1, '', '', '', '', '', '', '', '', 0)
      );
  }
}
