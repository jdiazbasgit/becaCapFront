import { Injectable, ɵɵclassMapInterpolate2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  urlJSON: string = './assets/empleadosBBDD.json';
  urlBBDD: string = 'http://188.127.162.129:8080/api/empleados';

  constructor(private httpClient: HttpClient) {}

  getDatosEmpleado() {
    return this.httpClient.get(this.urlBBDD);
  }

  postDatosEmpleado(empleado: Empleado) {
    console.log(empleado);
    return this.httpClient
      .post(this.urlBBDD, { method: 'post', body: JSON.stringify(empleado) })
      //.post(this.urlBBDD, empleado)
      /*.pipe(
        map((resp: any) => {
          empleado.id = resp.id;
          return empleado;
        })
      );*/
  }
}

export class Empleado {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  identificador: string;
  fechaAlta: string;
  fechaBaja: string;
  jornada: Jornada;
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    dni: string,
    identificador: string,
    fechaAlta: string,
    fechaBaja: string,
    jornada: Jornada
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.identificador = identificador;
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
    this.jornada = jornada;
  }
}
export class Jornada {
  id: number;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;
  domingo: string;
  descripcion: string;
  especial: string;
  constructor(
    id: number,
    lunes: string,
    martes: string,
    miercoles: string,
    jueves: string,
    viernes: string,
    sabado: string,
    domingo: string,
    descripcion: string,
    especial: string
  ) {
    this.id = id;
    this.lunes = lunes;
    this.martes = martes;
    this.miercoles = miercoles;
    this.jueves = jueves;
    this.viernes = viernes;
    this.sabado = sabado;
    this.domingo = domingo;
    this.descripcion = descripcion;
    this.especial = especial;
  }
}
