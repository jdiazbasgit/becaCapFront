import { Component, OnInit } from '@angular/core';
import { Empleado, ServiceService } from '../service.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private service: ServiceService) {}
  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.getEmpleados(this.empleados);
  }

  getEmpleados(empleados: Empleado[]) {
    this.service.getDatos().subscribe(function (datos: any) {
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
        console.log(empleados)
        empleados.push(empleado);
        
      });
    });
  }
}
