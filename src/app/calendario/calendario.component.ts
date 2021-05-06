import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarMonthViewBeforeRenderEvent, CalendarMonthViewDay, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarioServiceService } from '../calendario-service.service';
import { CalendarEvent} from 'angular-calendar';
import { validateEvents } from 'angular-calendar/modules/common/util';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
 
})




export class CalendarioComponent implements OnInit {
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;

  // url: string = './assets/calendarsBBDD.json';
  // url2: string = 'http://188.127.162.129:8080/api/calendarios';
  url2021: string = 'http://localhost/calendarios';
  dias: Dia[] = [];
 
 


  


  constructor(private calendarioService: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getDias(this.dias, this.calendarioService);
   
  }


  getDias(dias: Dia[], service) {
    service.getDatos(this.url2021).subscribe(function (datos: any) {
      datos.forEach((element: any) => {
        let dia: Dia;
        dia = new Dia(element.fecha, element.diaSemana, element.semanaMes, element.estados_id);
        dias.push(dia); 
        
      });
    });
    
  }
 

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
      //console.log("laboral "+date);
      
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';

      var date = new Date(selectedDateTime);
      //console.log(" festivo "+date);
     
    }
    
  }
 

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void { 
    let arrayFechastring = this.dias.map(val => new Date(val.fecha)).map(val=> val.toString());
    

    renderEvent.body.forEach((day) => {
    //  const dayOfMonth = day.date.getDate();
    
      let estadosId = this.dias[arrayFechastring.indexOf(day.date.toString())].estados_id
     
      console.log(estadosId)
      

    if (estadosId == 2){
        day.cssClass = "cal-day-selected";
        
        // console.log(day.date +" dia  festivo");
      }

    });
  }

}



export class Dia {
  fecha: string;
  diaSemana: number
  semanaMes: number;
  estados_id: number;
  constructor(fecha: string, diaSemana: number, semanaMes: number, estados_id: number) {
    this.fecha =  fecha ;
    this.diaSemana = diaSemana;
    this.semanaMes = semanaMes;
    this.estados_id = estados_id;
  }



}


