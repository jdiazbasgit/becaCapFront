import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioServicioDatosService {
  urlCalendario= "http://10.68.9.250/api/calendario?year=";

  constructor() { }

  public cargarAnio(anio:number){
    return this.getDatos(this.urlCalendario + anio)
   // .then((datos:any) =>{
      //console.log(datos)
  //  })
    
  }

   getDatos(url: string): Promise<string> {
    return  new Promise((resolve, reject) => {
      fetch(url).then(response => response.json()).then((data) => resolve(data))
    });
  }


}
