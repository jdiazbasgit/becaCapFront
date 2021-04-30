import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  urlJSON: string = './assets/empleadosBBDD.json';
  //urlBBDD: string = 'http://10.68.9.250:80/api/empleados';
  urlBBDD: string = 'http://localhost:80/api/empleados';
  urlLogin: string = 'http://localhost:80/api/user?user=pepe&password=1234'

  constructor(private httpClient: HttpClient) {}

  getDatosEmpleado() {
    return this.httpClient.get(this.urlBBDD, {headers: {"Authorization": sessionStorage.getItem('token').toString()}});
  }

  postDatosEmpleado(empleado: Empleado) {
    /*let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': sessionStorage.getItem('token').toString()
    });*/
    return this.httpClient
      .post(this.urlBBDD, JSON.stringify(empleado))
  }

  postLogin(){
    return this.httpClient.post(this.urlLogin, {})
  }
}

export class Empleado {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  identificador: string;
  fecha_alta: Date;
  fecha_baja: Date;
  jornada: Jornada;
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    dni: string,
    identificador: string,
    fecha_alta: Date,
    fecha_baja: Date,
    jornada: Jornada
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.identificador = identificador;
    this.fecha_alta = fecha_alta;
    this.fecha_baja = fecha_baja;
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
  especial: number;
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
    especial: number
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
