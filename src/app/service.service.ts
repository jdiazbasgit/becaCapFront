import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = './assets/empleados.json';
  url2: string = 'http://188.127.165.135:8080/api/employees'

  constructor(private httpClient: HttpClient) {}

  getDatos() {
    return this.httpClient.get(this.url);
  }
}

export class Empleado {
  nombre: string;
  apellidos: string;
  dni: string;
  identificador: string;
  fechaAlta: string;
  fechaBaja: string;
  jornada: Jornada;
  constructor(
    nombre: string,
    apellidos: string,
    dni: string,
    identificador: string,
    fechaAlta: string,
    fechaBaja: string,
    jornada: Jornada
  ) {
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
  ) {}
}
