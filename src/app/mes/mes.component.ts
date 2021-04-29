import { Component, OnInit } from '@angular/core';
import { CalendarioServicioDatosService } from '../calendario-servicio-datos.service';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  mes: Array<any>

  constructor(private servicioDatos: CalendarioServicioDatosService) {
    servicioDatos.cargarMes(2021, 3).then((datos: any) => {
      this.mes = datos;
      this.generarSemanas();
    })
  }

  ngOnInit(): void {
  }

  private generarSemanas() {
    semanas: [] = [];
    let diasNull = this.mes[0].diaSemana - 1;
    console.log(diasNull)
    let primeraSemana = []
    for (let i = 1; i <= diasNull; i++) {
      primeraSemana.push(null)
    }
    let j = 0;
    while (this.mes[j].diaSemana != 1) {
      primeraSemana.push(this.mes[j])
      j++;
    }
    console.log(primeraSemana)
    let month = []
    month.push(primeraSemana)
    let semanaActual = []
    j--;
    for (; j++; j <= this.mes.length - 1) {
      if (j == 31) {
        break;
      }
      console.log("el valor de j es: " + j)
      console.log("longitud es: " + this.mes.length)
      semanaActual.push(this.mes[j])
      if (this.mes[j].diaSemana == 7) {
        month.push(semanaActual)
        semanaActual = []
      }
      let ultimaSemana=[]
     for(;j++;j<=this.mes.length-1){
       ultimaSemana.push(this.mes[j])
     }
     month.push(ultimaSemana);
    }
  
    console.log(month)
  }

}
