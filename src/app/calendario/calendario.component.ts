import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarMonthViewDay } from 'angular-calendar';
import { CalendarioServiceService } from '../calendario-service.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
 
})




export class CalendarioComponent implements OnInit {
  
  viewDate: Date = new Date();

  url: string = './assets/calendarsBBDD.json';
  url2: string = 'http://188.127.162.129:8080/api/calendarios';
  url2021: string = 'http://localhost/api/calendario?year=2021';
  dias: Dia[] = [];
  


  constructor(private calendarioService: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getDias(this.dias, this.calendarioService);

    this.getCalendario();


  }
  getCalendario(){
    console.log("calendario")
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

//            color dias              //
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedDays: any = [];
  
  dayClicked(day: CalendarMonthViewDay): void {
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDays.findIndex(
      (selectedDay) => selectedDay.date.getTime() === selectedDateTime
    );
    
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);

      var date = new Date(selectedDateTime);
      console.log+"laboral "+(date);
      
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';

      var date = new Date(selectedDateTime);
      console.log(" festivo "+date);
    }
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

