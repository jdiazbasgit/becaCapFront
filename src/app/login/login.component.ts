import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../empleados-jornadas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicio: ServiceService) { }

  ngOnInit(): void {
  }


  clickHandler(user:string, password:string):void{
    console.log(user + " " + password);
    this.servicio.login(user, password);
  }


}
