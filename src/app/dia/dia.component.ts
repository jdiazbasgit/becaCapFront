import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css'],
})
export class DiaComponent implements OnInit {
  @Input() numero: number;
  @Input() tipoDia: string;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarTipoDia() {
    let aux: any
    aux = document.getElementById("selectTipoDia")
    this.tipoDia = aux.value
  }
}