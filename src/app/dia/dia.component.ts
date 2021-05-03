import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  @Input() datasource: any;

  @Output()
  descriptionChange = new EventEmitter<any>();

   esFestivo: boolean;



  constructor() {

  }

  ngOnInit(): void {
  }


  public onChange(value) {

    if (value === "festivo") {
      this.datasource.estado.id = 2;
      this.esFestivo=true;
    } else {
      this.datasource.estado.id = 1;
      this.esFestivo=false;
    }
    this.datasource.estado.descripcion = value;
    console.log(this.datasource);
    this.descriptionChange.emit(this.datasource);
  }


  // public jornadasChangeManejador(id, empleado) {
  //   alert("ha seleccionado " + id + " del empleado " + empleado.nombre)

  //   // empleado.jornada.id = id;
  //   // console.log(empleado)
  //   this.dataService.actualizarJornada(id,empleado)

  // }
}
