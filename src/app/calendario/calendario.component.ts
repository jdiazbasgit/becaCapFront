import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from '../calendario-service.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  url: string = './assets/calendarsBBDD.json';
  url2: string = 'http://188.127.162.129:8080/api/calendarios';
  url2021: string = 'http://188.127.162.129:8080/api/calendario?year=2021';
  dias: Dia[] = [];

  constructor(private calendarioService: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getDias(this.dias, this.calendarioService);
  }

  getDias(dias: Dia[], service) {
    service.getDatos(this.url2021).subscribe(function (datos: any) {
      datos.forEach((element: any) => {
        let dia: Dia;
        dia = new Dia(element.fecha, element.diaSemana, element.semanaMes, element.estado.descripcion, element.estado.tipo);
        dias.push(dia);
      });
    });
  }

}

export class Dia {
  fecha: Date;
  diaSemana: number
  semanaMes: number;
  estadoDescripcion: string;
  estadoTipo: number;
  constructor(fecha: Date, diaSemana: number, semanaMes: number, estadoDescripcion: string, estadoTipo: number) {
    this.fecha = fecha;
    this.diaSemana = diaSemana;
    this.semanaMes = semanaMes
    this.estadoDescripcion = estadoDescripcion;
    this.estadoTipo = estadoTipo;
  }

}
