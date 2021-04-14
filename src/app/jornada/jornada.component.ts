import { Component, OnInit } from '@angular/core';
import { JornadaModalComponent } from '../jornada-modal/jornada-modal.component';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  constructor(private modal:JornadaModalComponent) { 
  }

  ngOnInit(): void {
  }

  showModal(){
    this.modal.show();
  }

}
