import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from '../calendario-service.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  url: string = './assets/calendarsBBDD.json';
  url2: string = 'http://188.127.162.129:8080/api/calendars';
  dias: Dia[] = [];

  constructor(private calendarioService: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getDias(this.dias, this.calendarioService);
  }

  getDias(dias: Dia[], service) {
    service.getDatos(this.url).subscribe(function (datos: any) {
      datos._embedded.calendars.forEach((element: any) => {
        //service.getDatos(element._links.estado.href).subscribe(function (estado: any) {
        //  console.log(estado);
        //})
        let dia: Dia;
        //dia = new Dia(element.fecha, estado.descripcion, estado.tipo);
        dias.push(dia);
      });
    });
  }

}

export class Dia {
  fecha: Date;
  estadoDescripcion: string;
  estadoTipo: number;
  constructor(fecha: Date, estadoDescripcion: string, estadoTipo: number) {
    this.fecha = fecha;
    this.estadoDescripcion = estadoDescripcion;
    this.estadoTipo = estadoTipo;
  }

}
