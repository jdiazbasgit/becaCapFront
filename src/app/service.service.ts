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

  private getDatosJornada() {
    return this.httpClient.get(this.urlJornada)
  }

  private getDatosEmpleado() {
    return this.httpClient.get(this.urlEmpleados)
  }

  private getIdEmpleado() {
    return this.httpClient.get(this.jornadaLinks)
  }


  public getDatosEmpleados(): Observable<Empleado> {
    let datosEmp: Observable<Empleado>
    let empleados = this.getDatosEmpleado()

    empleados.subscribe((element: any) => {
       console.log(element);
      element._embedded.employees.forEach((dato: any) => {
        // let links = new Links(datos._links.self.href, datos._links.employee.href,
        //    datos.link.jornada.href)
        // console.log(datos._links.jornada)
        let emp = new Empleado(dato.nombre, dato.apellidos, dato.dni, dato.identificador,
          dato.fecha_alta, dato.fecha_baja, dato._links.jornada)
          //console.log(emp)
        this.jornadaLinks = dato._links.jornada.href
        //this.urlJornada = datos._links.jornada.href
        //console.log(this.jornadaLinks)
        //datosEmp.push(emp)
        //console.log(element)
        datosEmp=element
        //return element
      });
    })
    // .then(() => { return datosEmp; })
    return datosEmp;
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
  public getIdEmpleados(): Jornada[] {
    let id = this.getIdEmpleado()
    let datosJorEmp: Jornada[] = []
    id.forEach((datos: any) => {
      let jor = new Jornada(datos.lunes, datos.martes, datos.miercoles,
        datos.jueves, datos.viernes, datos.sabado, datos.domingo, datos.descripcion,
        datos.especial, datos._links);
      datosJorEmp.push(jor)
    });
    return datosJorEmp
  }

  public getDatos(url: string): Observable<any> {

    return this.httpClient.get(url)
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


