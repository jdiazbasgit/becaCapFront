import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { JornadaDatosService } from '../jornada-datos.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  operation: string = "Nueva";
  service: any;
  //url:string = "http://188.127.165.135:8080/api/days";
  url: string = "./assets/jornadas.json";

  constructor(service: JornadaDatosService, config: NgbModalConfig, private modal: NgbModal, private datosService: JornadaDatosService) {
    this.service = service;

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.showJornada();
  }

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
    botonEdit.classList.add("btn-warning");
    botonEdit.innerText = "Edit";
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

  treatDay(turnos: string): string {
    let result = "";
    let horas = turnos.split("&");
    horas.forEach((element: any) => {
      // console.log(result);
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



  /*showJornada(): void {
    this.service.getDatos(this.url).then((datos: any) => {
      datos._embedded.days.forEach((element: any) => {
        console.log("Lunes de la jornada:" + element.lunes);
        console.log("Martes de la jornada:" + element.martes);
      });
    })
  }*/

  showModal(template) {
    this.modal.open(template, { size: 'lg' });
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

  }
}

