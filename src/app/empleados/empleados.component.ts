import { Component, OnInit, DoCheck } from '@angular/core';
import { Empleado, ServiceService, Jornada } from '../service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioEmpleadoComponent } from '../formulario-empleado/formulario-empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit, DoCheck {
  empleados: Empleado[] = [];
  empleadosFiltrados: Empleado[] = [];
  fecha_baja: boolean = false;

  constructor(
    private service: ServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getEmpleados(this.empleados);
  }

  ngDoCheck(): void {
    this.filterChange();
  }

  filterChange() {
    console.log('llego');
    if (!this.fecha_baja)
      this.empleadosFiltrados = this.empleados.filter(
        (e) => e.fecha_baja === null
      );
    else this.empleadosFiltrados = this.empleados;
  }

  getEmpleados(empleados: Empleado[]) {
    this.service.getDatosEmpleado().subscribe((datos: any) => {
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

    modalRef.result.then(
      (result) => {
        this.getEmpleados(this.empleados);
      },
      (reason) => {
        if (reason === 0 || reason === 'Cross click') {
          this.empleados = [];
          this.getEmpleados(this.empleados);
        }
      }
    );
  }
}
