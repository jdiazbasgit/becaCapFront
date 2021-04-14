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
  constructor(id: number, lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, sabado: string, domingo: string, descripcion: string, especial: string) {
  }
}