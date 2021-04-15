import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado, Jornada, ServiceService } from '../service.service';

@Component({
  selector: 'app-empleado-jornada',
  templateUrl: './empleado-jornada.component.html',
  styleUrls: ['./empleado-jornada.component.css']
})
export class EmpleadoJornadaComponent implements OnInit {

  public datosEmp: Observable<Empleado> 
  public datosJor: Array<Jornada> = new Array()
  public datosJorEmp: Array<Jornada> = new Array()
  
  constructor(private dataService : ServiceService) { 
    
    this.datosEmp = this.dataService.getDatosEmpleados();
    this.datosJor = this.dataService.getDatosJornadas();
    this.datosJorEmp=this.dataService.getIdEmpleados()
   
  }

  ngOnInit(): void {
   // console.log(this.datosEmp, this.datosJor, this.datosJorEmp)
    this.cargaInicial()

  }
  cargaInicial(): void{
    let jornada: string
    console.log(this.dataService.getDatosEmpleados())
    this.dataService.getDatosEmpleados().forEach((elements: any) => {
      
      // this.dataService.getDatos(element.jornada.href).subscribe((jornada:any)=>{
      //   console.log(element)
      //   jornada=element._links.self.href.substring(element._links.self.href.length-1)
      // })
      // let empleado:Empleado= new Empleado(element.nombre, element.apellidos,element.dni,
      //    element.identificador,element.fecha_alta, element.fecha_baja, jornada)
      //    this.datosEmp.push(empleado)
         console.log("empleados: "+elements)
    });
  }
}
