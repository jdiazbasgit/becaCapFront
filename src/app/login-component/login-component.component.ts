import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rejects } from 'node:assert';

import { Authentication } from '../jornada-datos.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  authUrl = "http://localhost/user";
  authentication: Authentication;

  constructor(private router: Router) {
    let user = sessionStorage.getItem("user");

    if (user)
      this.router.navigate(["jornadas"]);
  }

  ngOnInit(): void {
  }

  login() {
    let user = (<HTMLInputElement>document.getElementById("usernameInput")).value;
    let password = (<HTMLInputElement>document.getElementById("passwordInput")).value;

    let json = `{
      "user":"${user}",
      "password":"${password}"
    }`;

    fetch(`${this.authUrl}?user=${user}&&password=${password}`, {
      method: 'POST'
    }).then(data => data.json()).then(response => {
          // this.authentication = JSON.parse(response);

          response.then(dt=>{
            console.log(dt);
          });

          // sessionStorage.setItem("username", this.authentication.user);
          // sessionStorage.setItem("token", this.authentication.token);
          // sessionStorage.setItem("rol", this.authentication.rol);
        });

    // new Promise((resolve, reject) => {
    //   fetch(`${this.authUrl}?user=${user}&&password=${password}`, {
    //     method: 'POST',
    //   }).then(response => response.json()).then((data) => resolve(data))
    // }).then((data)=>{
    //   console.log(data);
    // });

    // fetch(`${this.authUrl}?user=${user}&&password=${password}`,{
    //   method: 'POST',
    // }).then(response => response.json()).then(data => {
    //   console.log(data);
    // });
  }

}
