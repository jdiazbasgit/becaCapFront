import { Component, OnInit } from '@angular/core';
import { EmpleadoDto, JornadaDto, ServiceService } from '../service.service';

@Component({
  selector: 'app-empleado-jornada',
  templateUrl: './empleado-jornada.component.html',
  styleUrls: ['./empleado-jornada.component.css']
})
export class EmpleadoJornadaComponent implements OnInit {

  public datosEmp: EmpleadoDto[] = []
  public datosJor: JornadaDto[] = []
  
  constructor(private dataService : ServiceService) { 
    
    this.datosEmp = this.dataService.getDatosEmpleados();
    this.datosJor = this.dataService.getDatosJornadas();
  }

  ngOnInit(): void {
    
  }

}
