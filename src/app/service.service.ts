import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlJornada = "./assets/jornadas.json"
  urlEmpleados = "./assets/empleados.json"
  constructor(private httpClient: HttpClient) { }

  private getDatosJornada() {
    return this.httpClient.get(this.urlJornada)
  }

  private getDatosEmpleado() {
    return this.httpClient.get(this.urlEmpleados)
  }

  public getDatos(): void {
    let datosEmp: EmpleadoDto[] = []
    let empleados = this.getDatosEmpleado()
    empleados.forEach((element: any) => {
      element.forEach((datos: any) => {
        let emp = new EmpleadoDto(datos.nombre, datos.apellidos, datos.dni, null)
        console.log(emp)
        datosEmp.push(emp)
        console.log(datosEmp.length)
      });
      datosEmp.forEach((e: EmpleadoDto) => {
        // console.log("prueba")
        console.log(e.dni + " " + e.nombre + " " + e.apellidos)
      });
    })


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

export class EmpleadoDto {
  constructor(public nombre: string, public apellidos: string, public dni: string, public jornada: JornadaDto) {

  }
}

export class JornadaDto {
  constructor(id: number, descripcion: string) {

  }
}

