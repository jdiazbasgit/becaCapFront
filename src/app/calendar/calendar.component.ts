import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjdXJzb0pXVCIsInN1YiI6InBlcGUiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIwMzY4ODU2LCJleHAiOjE2MjAzNjk0NTZ9.yBoRTFPSIdf23HXHrt8Xcs7yGc6Vr6PVGJiA_-TcSuLvBADhZbpMKqyJJbQwTVPMqIR81fQACBnezUQ5ju_s2A';



  days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  // days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vier', 'Sab'];
  monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // apiURI='http://188.127.162.129:8080';
  apiURI = 'http://localhost';


  years = new Array();

  connectionError = 1;

  currentMonth;
  currentYear;
  data;
  month = new Array(5);

  yearWorkdays = Array();
  monthWorkdays = Array();
  date;

  constructor() {
    fetch(`${this.apiURI}/api/calendario/`, {
      headers: {
        "Authorization": this.token
      }
    }).then(response => response.json()).then(data => {

      this.connectionError = 0;
      this.currentMonth = 0;
      this.currentYear = 0;

      this.fillYears(data);

      this.date = new Date(this.years[this.currentYear], this.currentMonth, 1);

      this.loadWorkdays();
      // setTimeout(() => this.initialize(data), 2000);
    }, () => {
      alert('No se puede conectar con los recursos de red. Se mostrara un calendario predeterminado.Recargue la página en unos segundos y verifique si el problema persiste, si es así contacte con el administrador del sistema.');

      this.connectionError = 1;

      this.date = new Date();
      this.years.push(this.date.getFullYear());
      this.currentMonth = this.date.getMonth();
      this.currentYear = 0;
      this.fillMonth();
      setTimeout(() => { this.decorateTable(); });
    });
  }

  ngOnInit(): void {
  }

  fillMonth() {
    let startDay = this.calculateStartDay();

    let i;
    let currentDay = startDay;
    let jumpDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    let tmpDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    let jumps = 0;

    for (i = 0; i < 6; i++) {
      this.month[i] = new Array(7);
      this.monthWorkdays[i] = new Array(7);

      let j;
      for (j = 0; j < 7; j++) {
        if (currentDay > jumpDay) {
          currentDay = 1;
          jumpDay = tmpDate.getDate();
          jumps++;
        }
        this.month[i][j] = currentDay;

        if (this.connectionError == 0) {
          if (jumps == 1) {
            this.monthWorkdays[i][j] = this.yearWorkdays[this.currentMonth][currentDay - 1];
          }
          else
            this.monthWorkdays[i][j] = 3;
        }
        currentDay++;
      }
    }
  }

  decorateTable() {
    let firstRow = document.getElementById(`week${0}`);
    let secondLastRow = document.getElementById(`week${this.month.length - 2}`);
    let lastRow = document.getElementById(`week${this.month.length - 1}`);

    let i;
    for (i = 0; i < 7; i++) {
      if (this.month[0][i] > 7) {
        firstRow.children[i].setAttribute('class', 'bg-light');
        firstRow.children[i].children[0].setAttribute('class', 'text-muted');
      }
      if (this.month[this.month.length - 2][i] <= 11) {
        secondLastRow.children[i].setAttribute('class', 'bg-light');
        secondLastRow.children[i].children[0].setAttribute('class', 'text-muted');
      }
      if (this.month[this.month.length - 1][i] <= 11) {
        lastRow.children[i].setAttribute('class', 'bg-light');
        lastRow.children[i].children[0].setAttribute('class', 'text-muted');
      }
    }
  }

  updateMonth(operation) {
    if (operation == 'adv') {
      if (this.currentMonth < 11)
        this.currentMonth++;
      else if (this.currentYear < this.years.length - 1) {
        this.currentMonth = 0;
        this.currentYear++;
        (<HTMLSelectElement>document.getElementById('yearSelect')).value = this.years[this.currentYear];
      } else this.signal();
    } else {
      if (this.currentMonth > 0)
        this.currentMonth--;
      else if (this.currentYear > 0) {
        this.currentYear--;
        (<HTMLSelectElement>document.getElementById('yearSelect')).value = this.years[this.currentYear];
        this.currentMonth = 11;
      } else this.signal();
    }
    this.date = new Date(this.years[this.currentYear], this.currentMonth, 1);

    if (this.connectionError == 0)
      this.loadWorkdays();
    else
      this.fillMonth();

    setTimeout(() => { this.decorateTable(); });
  }

  updateYear() {
    let year = (<HTMLSelectElement>document.getElementById('yearSelect')).value;
    this.currentYear = this.years.indexOf(Number(year));

    this.currentMonth = 0;

    this.date = new Date(Number(year), this.currentMonth, 1);

    if (this.connectionError == 0)
      this.loadWorkdays();
    else
      this.fillMonth();

    this.fillMonth();
    setTimeout(() => { this.decorateTable(); });
  }

  signal() {

    let time;

    for (time = 0; time < 600; time += 150) {
      setTimeout(() => {
        document.getElementById('yearSelect').classList.toggle('btn-danger');
      }, time);

      setTimeout(() => {
        document.getElementById('yearSelect').classList.toggle('signal');
      }, time);
    }
  }

  calculateStartDay() {
    let currentMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    let previousMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);

    let startDay = previousMonth.getDate() - (currentMonth.getDay()) + 1;

    return startDay;
  }

  fillYears(data) {
    let yearsDays = data;

    let i;
    let step = 365;
    for (i = 0; i < yearsDays.length; i += step) {
      let tmpDate = new Date(yearsDays[i].fecha);
      tmpDate.setMonth(2);
      tmpDate.setDate(0);

      this.years.push(tmpDate.getFullYear());

      if (tmpDate.getDate() == 29)
        step = 366; else step = 365;
    }
    this.years.sort();
  }

  loadWorkdays() {
    fetch(`${this.apiURI}/api/calendario/all/` + this.years[this.currentYear], {
      headers: {
        "Authorization": this.token
      }
    }).then(response => response.json()).then((tmpYear) => {

      let i, j, arrayIndex = 0;
      for (i = 0; i < 11; i++) {
        this.yearWorkdays[i] = new Array();
        let tmpDate = new Date(this.years[this.currentYear], i + 1, 0);

        for (j = 0; j < tmpDate.getDate(); j++) {
          this.yearWorkdays[i][j] = tmpYear[arrayIndex].estado.id;
          arrayIndex++;
        }
      }
      this.fillMonth();
      setTimeout(() => { this.decorateTable(); });
    });
  }

}
