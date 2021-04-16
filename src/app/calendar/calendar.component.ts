import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  years = new Array();

  currentMonth = 3;
  currentYear = 0;

  month = new Array(5);



  date = new Date(2021, 3, 1);

  constructor() {
    this.years.push(2021);
    this.years.push(2022);
  }

  ngOnInit(): void {
    this.fillMonth();
    setTimeout(() => { this.decorateTable(); });
  }

  fillMonth() {
    let startDay = this.calculateStartDay();

    let i;
    let currentDay = startDay;
    let jumpDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    let tmpDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);

    for (i = 0; i < 6; i++) {
      this.month[i] = new Array(7);

      let j;
      for (j = 0; j < 7; j++) {
        if (currentDay > jumpDay) {
          currentDay = 1;
          jumpDay = tmpDate.getDate();
        }
        this.month[i][j] = currentDay++;
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

    this.fillMonth();
    setTimeout(() => { this.decorateTable(); });
  }

  updateYear() {
    let year = (<HTMLSelectElement>document.getElementById('yearSelect')).value;
    this.currentYear = this.years.indexOf(Number(year));

    this.currentMonth = 0;

    this.date = new Date(Number(year), this.currentMonth, 1);

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

}
