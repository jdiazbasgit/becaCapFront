import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  getDatos(url: string) {
    return this.httpClient.get(url);
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
