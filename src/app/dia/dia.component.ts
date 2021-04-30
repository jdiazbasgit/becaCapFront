import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  @Input() datasource: any;
  esFestivo: boolean = false;
  
  constructor() {

  }

  ngOnInit(): void {
  }

}
