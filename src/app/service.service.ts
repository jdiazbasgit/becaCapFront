import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlJornada = "http://188.127.162.129:8080/api/jornadas"

  urlEmpleados = "http://188.127.162.129:8080/api/empleados"
  // jornadaLinks: any;
  constructor(private httpClient: HttpClient) { }






  public getDatosEmpleados(): Array<Empleado> {

    let empleados: Array<Empleado> = new Array()
    this.getDatos(this.urlEmpleados).then((datos: any) => {
      //console.log(datos)
      datos.forEach((dato: any) => {
        // this.getDatos(dato.jornada).then((dato: any) => {
        //   console.log("jornada:" + dato)
        // })
        let emp = new Empleado(dato.id, dato.nombre, dato.apellidos, dato.dni, dato.identificador,
          dato.fecha_alta, dato.fecha_baja, dato.jornada)
        empleados.push(emp)
      });
    })
    return empleados
  }
  // public getDatosJornada(): Array<any> {
  //   return
  // }

  public actualizarJornada(empleado: Empleado) {
   // fetch(this.urlJornada)

    fetch(this.urlEmpleados, { method: "post", body: JSON.stringify(empleado) })
  }

  public getDatosJornadas(): Jornada[] {
    let datosJor: Array<Jornada> = new Array()
    this.getDatos(this.urlJornada).then((datos: any) => {
      datos.forEach((element: any) => {
        //console.log(element)

        let jor = new Jornada(element.id, element.lunes, element.martes, element.miercoles,
          element.jueves, element.viernes, element.sabado, element.domingo, element.descripcion,
          element.especial);
        //console.log(jor)
        datosJor.push(jor)

      })

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
  constructor(public id: number , public nombre: string, public apellidos: string, public dni: string,
    public identificador: string,
    public fecha_alta: Date, public fecha_baja: Date, public jornada: Jornada) {

  }
}

export class Jornada {
  constructor(public id: number, public lunes: string, public martes: string, public miercoles: string,
    public jueves: string, public viernes: string, public sabado: string, public domingo: string,
    public descripcion: string, public especial: number) {

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


