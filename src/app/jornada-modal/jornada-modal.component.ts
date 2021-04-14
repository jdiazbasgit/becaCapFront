import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JornadaDatosService } from '../jornada-datos.service';

@Component({
  selector: 'app-jornada-modal',
  templateUrl: './jornada-modal.component.html',
  styleUrls: ['./jornada-modal.component.css']
})

@Injectable({ providedIn: 'root' })
export class JornadaModalComponent implements OnInit {
  @ViewChild("modalTemplate") template;

  operation: string = "Nueva";

  constructor(config: NgbModalConfig, private modal: NgbModal, private datosService: JornadaDatosService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    console.log(this.template);
  }

  show() {
    
    this.modal.open(this);

  }

}
