import { Component, OnInit } from '@angular/core';
import { Empleado, ServiceService } from '../service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioEmpleadoComponent } from '../formulario-empleado/formulario-empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  url: string = './assets/empleadosBBDD.json';
  url2: string = 'http://188.127.162.129:8080/api/empleados';
  empleados: Empleado[] = [];

  constructor(
    private service: ServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getEmpleados(this.empleados);
  }

  getEmpleados(empleados: Empleado[]) {
    this.service.getDatos(this.url2).subscribe(function (datos: any) {
      datos.forEach((element: any) => {
        let empleado: Empleado;
        empleado = new Empleado(
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
      empleado || new Empleado('', '', '', '', '', '', null);
  }
}
