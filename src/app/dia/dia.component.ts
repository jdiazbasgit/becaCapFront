import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from "../calendario-service.service";

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {
url: string = './assets/calendarsBBDD.json';
url2: string = 'http://188.127.162.129:8080/api/calendars';
dias: Dia[] = [];

  constructor(private calendarioService: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getDias(this.dias)
  }

  getDias(dias: Dia[]) {
    this.calendarioService.getDatos(this.url).subscribe(function (datos: any) {
      datos._embedded.calendars.forEach((element: any) => {
        this.getEstados(element)
        let dia: Dia;
        dia = new Dia(
          element.fecha,       
          element.apellidos,
          element.dni,
        );
        dias.push(dia);
      });
    });
  }
  getEstados(element: any){
        this.calendarioService.getDatos(element._links.estado.href).subscribe(function (estados: any) {
          console.log(estados)
        })
  }

}

export class Dia {
  fecha: Date
  estadoDescripcion: string
  estadoTipo: number
  constructor(fecha: Date, estadoDescripcion: string, estadoTipo: number){
    this.fecha = fecha
    this.estadoDescripcion = estadoDescripcion
    this.estadoTipo = estadoTipo
  }
}