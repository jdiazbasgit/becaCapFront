import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlJornada = "./assets/days.json"
  
  urlEmpleados = "./assets/employees.json"
  jornadaLinks: any;
  constructor(private httpClient: HttpClient) { }






  public getDatosEmpleados(): Array<Empleado> {

    let empleados:Array<Empleado>= new Array()
    this.getDatos(this.urlEmpleados).then((datos: any) => {
      console.log(datos)
      datos._embedded.employees.forEach((dato:any) => {
        this.getDatos(dato._links.jornada).then((dato: any) => {
          console.log("jornada:" + dato)
        })
        let emp = new Empleado(dato.nombre, dato.apellidos, dato.dni, dato.identificador,
          dato.fecha_alta, dato.fecha_baja, dato._links.jornada)
          empleados.push(emp)
      });
    })
    return empleados
  }
  public getDatosJornada(): Array<any> {
    return
  }

  public getDatosJornadas(): Jornada[] {
    let datosJor: Jornada[] = []
    let jornadas = this.getDatosJornada()
    jornadas.forEach((element: any) => {
      //console.log(element)
      element._embedded.days.forEach((datos: any) => {
        let jor = new Jornada(datos.lunes, datos.martes, datos.miercoles,
          datos.jueves, datos.viernes, datos.sabado, datos.domingo, datos.descripcion,
          datos.especial, datos._links);
        //console.log(jor)
        datosJor.push(jor)
      });
    })

    return datosJor
  }


  getDatos(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(url).then(response => response.json()).then((data) => resolve(data))
    });
  }

}

// cambiar(): void {
//   this.uno.user = "federico";
//   this.service.getDatos(this.url).then((datos: any) => {
//     datos.forEach((element: any) => {
//       console.log("dni:" + element.dni)
//     });
//   })
// }

export class Empleado {
  constructor(public nombre: string, public apellidos: string, public dni: string,
    public identificador: string,
    public fecha_alta: Date, public fecha_baja: Date, public jornada: string) {

  }
}

export class Jornada {
  constructor(public lunes: string, public martes: string, public miercoles: string,
    public jueves: string, public viernes: string, public sabado: string, public domingo: string,
    public descripcion: string, public especial: number, public _links: LinksJor) {

  }
}

export class Links {
  constructor(public self: string, public employee: string, public jornada: string) {

  }
}

export class LinksJor {
  constructor(public self: string, public day: string) {

  }
}


