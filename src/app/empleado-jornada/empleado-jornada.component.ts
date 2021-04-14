import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-empleado-jornada',
  templateUrl: './empleado-jornada.component.html',
  styleUrls: ['./empleado-jornada.component.css']
})
export class EmpleadoJornadaComponent implements OnInit {

  constructor(private dataService : ServiceService) { 
    dataService.getDatos()
  }

  ngOnInit(): void {
  }

}
