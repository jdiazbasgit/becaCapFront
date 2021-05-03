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

  esFestivo: boolean = false;



  constructor() {

  }

  ngOnInit(): void {
  }


  public onChange(value) {
    alert(value);
    this.datasource.descripcion = value;
    this.descriptionChange.emit();
  }


  // public jornadasChangeManejador(id, empleado) {
  //   alert("ha seleccionado " + id + " del empleado " + empleado.nombre)

  //   // empleado.jornada.id = id;
  //   // console.log(empleado)
  //   this.dataService.actualizarJornada(id,empleado)

  // }
}
