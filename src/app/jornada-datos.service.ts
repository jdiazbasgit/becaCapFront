import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JornadaDatosService {

  constructor() { }

  getDatos(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(url).then(response => response.json()).then((data) => resolve(data))
    });
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
  constructor(id: number, lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, sabado: string, domingo: string, descripcion: string, especial: string) {
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