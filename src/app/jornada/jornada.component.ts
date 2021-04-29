import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Jornada, JornadaDatosService } from '../jornada-datos.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements AfterViewInit {

  @ViewChild('modalTemplate') modalTemplate: TemplateRef<any>;

  option;
  modalRef;
  operation: string = "Nueva";
  service: any;
  url: string = "http://10.68.9.250/api/jornadas/";
  jornadas: Jornada[] = [];

  constructor(service: JornadaDatosService, config: NgbModalConfig, private modal: NgbModal, private datosService: JornadaDatosService) {
    this.service = service;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngAfterViewInit(): void {
    this.getJornadas(this.jornadas);
    //this.showJornada();
  }

  getJornadas(jornadas: Jornada[]) {
    this.service.getDatos(this.url)
      .then((datos: any) => {
        datos.forEach((element: any) => {
          let jornada: Jornada;
          jornada = new Jornada(
            element.id,
            this.treatDay(element.lunes),
            this.treatDay(element.martes),
            this.treatDay(element.miercoles),
            this.treatDay(element.jueves),
            this.treatDay(element.viernes),
            this.treatDay(element.sabado),
            this.treatDay(element.domingo),
            element.descripcion,
            this.treatSpecial(element.especial));
          jornadas.push(jornada);
        });
      })
  }

  treatDay(turnos: string): string {
    let result = "";
    let horas = turnos.split("&");
    horas.forEach((element: any) => {
      result = result + element + "\n";
    })
    return result;
  }

  treatSpecial(especial: number): string {
    let result = "";
    if (especial === 0) {
      result = "No";
    }
    else if (especial === 1) {
      result = "Si"
    } else {
      result = "N/A"
    }
    return result;
  }

  /*
    showJornada(): void {
      let ident: number = 0;
      this.service.getDatos(this.url)
        .then((datos: any) => {
          datos.forEach((element: any) => {
            this.treatSemana(element, ident);
            ident++;
          });
        })
    }
  
  
    treatSemana(semana: any, ident: number) {
      let cuerpoTabla = document.querySelector("#filasJornada");
      let fila = document.createElement("tr");
      fila.classList.add("text-center");
      fila.id = `fila${ident}`;
  
      let nombre = document.createElement("td");
      nombre.innerText = semana.descripcion;
  
  
      let lunes = document.createElement("td");
      lunes.innerText = this.treatDay(semana.lunes);
  
      let martes = document.createElement("td");
      martes.innerText = this.treatDay(semana.martes);
  
      let miercoles = document.createElement("td");
      miercoles.innerText = this.treatDay(semana.miercoles);
  
      let jueves = document.createElement("td");
      jueves.innerText = this.treatDay(semana.jueves);
  
      let viernes = document.createElement("td");
      viernes.innerText = this.treatDay(semana.viernes);
  
      let sabado = document.createElement("td");
      sabado.innerText = this.treatDay(semana.sabado);
  
      let domingo = document.createElement("td");
      domingo.innerText = this.treatDay(semana.domingo);
  
      let especial = document.createElement("td");
      especial.innerText = this.treatSpecial(semana.especial);
  
      let colBoton = document.createElement("td");
      let botonEdit = document.createElement("button");
      botonEdit.classList.add("btn");
      botonEdit.classList.add("btn-info");
      botonEdit.innerText = "Edit";
  
      var self = this;
      botonEdit.addEventListener('click', function () {
        self.showModal(self.modalTemplate, 'edit');
      });
  
      colBoton.appendChild(botonEdit);
  
      fila.appendChild(nombre);
      fila.appendChild(lunes);
      fila.appendChild(martes);
      fila.appendChild(miercoles);
      fila.appendChild(jueves);
      fila.appendChild(viernes);
      fila.appendChild(sabado);
      fila.appendChild(domingo);
      fila.appendChild(especial);
      fila.appendChild(colBoton);
  
      cuerpoTabla.appendChild(fila);
  
    }
  */

  showModal(template, operation, id = 0) {
    this.modalRef = this.modal.open(template, { size: 'lg' });
    this.tableGenerator(operation, id);
    this.tableUpdater(2);

    this.modalRef.result.then((result) => {
      let tbody = <HTMLElement>result;

      let turns = Array();
      let i;
      for (i = 0; i < this.option; i++)
        Array.from(tbody.getElementsByClassName(`t${i}`)).forEach((element)=>{
          turns.push(<HTMLElement> element);
        })
      this.generateWorkday(turns);
    })
  }

  tableUpdater(opt) {
    switch (opt) {
      case 1:
        Array.from(document.getElementsByClassName("t2")).forEach(element => {
          (<HTMLInputElement>element).disabled = true;
        });
        Array.from(document.getElementsByClassName("t3")).forEach(element => {
          (<HTMLInputElement>element).disabled = true;
        });
        break;
      case 2:
        Array.from(document.getElementsByClassName("t2")).forEach(element => {
          (<HTMLInputElement>element).disabled = false;
        });
        Array.from(document.getElementsByClassName("t3")).forEach(element => {
          (<HTMLInputElement>element).disabled = true;
        });
        break;
      case 3:
        Array.from(document.getElementsByClassName("t2")).forEach(element => {
          (<HTMLInputElement>element).disabled = false;
        });
        Array.from(document.getElementsByClassName("t3")).forEach(element => {
          (<HTMLInputElement>element).disabled = false;
        });
    }
    this.option = opt;
  }

  tableGenerator(operation, id) {
    let tbody = document.getElementById("tablaJornadaBody");
    let days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

    if (operation == 'edit') {
      id++; //esto se hace porque los ids empiezan en 1 y los indices de las filas en 0.
      //this.service.getDatos(this.url2).then((datos: any) => {
      this.service.getDatos(this.url + id).then((datos: any) => {
        let i;
        let max = 1;
        for (i = 0; i < 7; i++) {
          let jornada = datos[days[i]].split("&");

          if (jornada == undefined)
            tbody.appendChild(this.rowGenerator(i));
          else {
            if (jornada.length > max)
              max = jornada.length;

            tbody.appendChild(this.rowGenerator(i, jornada));
          }
        }
        (<HTMLInputElement>document.getElementById(`${max}j`)).checked = true;

        this.tableUpdater(max);
      })
    } else {
      let i;
      for (i = 0; i < 7; i++) {
        tbody.appendChild(this.rowGenerator(i));
      }
    }
  }

  rowGenerator(index, jornada = ["08:00-15:00", "15:00-23:00", "23:30-07:30"]) {
    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let tr = document.createElement('tr');
    tr.setAttribute("text-align", "left");

    let td = document.createElement('td');
    td.innerHTML = days[index];
    tr.appendChild(td);

    let len = jornada.length;

    var j;
    for (j = 0; j < 3; j++) {
      td = document.createElement('td');

      if (j >= len)
        jornada.push("00:00-00:00");

      let turno = jornada[j].split("-");

      if (turno.length == 2) {
        if (turno[0].length < 5)
          turno[0] = "0" + turno[0];
        if (turno[1].length < 5)
          turno[1] = "0" + turno[1];
      } else {
        turno = new Array();
        turno.push("00:00");
        turno.push("00:00");
      }
      td.innerHTML = `<td><input class="t${j + 1}" value="${turno[0]}" type="time"> - <input class="t${j + 1}" value="${turno[1]}" type="time">`;
      tr.appendChild(td);
    }
    return tr;
  }

  generateWorkday(turns) {
    let days = Array();

    let i = 0, index = turns.length / this.option;
    for (i; i < turns.length / this.option; i += 2) {
      days.push(turns[i]);
      days.push(turns[i + 1]);
      if (this.option > 1) {
        days.push(turns[index + i]);
        days.push(turns[index + i + 1]);
      }
      if (this.option > 2) {
        days.push(turns[index * 2 + i]);
        days.push(turns[index * 2 + i + 1]);
      }
    }
    console.log(turns);
    console.log(days);
  }
  saveDay(day) {
    fetch(this.url, {
      method: 'POST',
      headers: {
      },
      body: JSON.stringify(day)
    });
  }
}
