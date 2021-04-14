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


  public getDatosEmpleados(): EmpleadoDto[] {
    let datosEmp: EmpleadoDto[] = []
    let empleados = this.getDatosEmpleado()

    empleados.forEach((element: any) => {
      console.log(element);
      element.forEach((datos: any) => {
        let emp = new EmpleadoDto(datos.nombre, datos.apellidos, datos.dni, datos.jornada)
        datosEmp.push(emp)
      });
    })
    // .then(() => { return datosEmp; })
    return  datosEmp;
  }

  public getDatosJornadas(): JornadaDto[]{
    let datosJor: JornadaDto[] = []
    let jornadas = this.getDatosJornada()

    jornadas.forEach((element: any) => {
      element.forEach((datos:any) => {
        let jor = new JornadaDto(datos.id, datos.descripcion);
        datosJor.push(jor)
      });
    })
    
    return datosJor
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
  constructor(public nombre: string, public apellidos: string, public dni: string, public jornada: number) {

  }
}

export class JornadaDto {
  constructor(public id: number, public descripcion: string) {

  }
}

