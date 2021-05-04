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
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    }).then((data) => {
      if (data != null) {
        // this.authentication = JSON.parse(response.json.toString());
        console.log(data.json());
        // sessionStorage.setItem("username", this.authentication.user);
        // sessionStorage.setItem("token", this.authentication.token);
        // sessionStorage.setItem("rol", this.authentication.rol);
      }
    });
  }

}
