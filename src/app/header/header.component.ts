import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username;
  logoutText;

  constructor(private router: Router) {
    this.username=sessionStorage.getItem("user");

    if(this.username)
      this.logoutText=`Logout: ${this.username}`;
   }

  ngOnInit(): void {
  }

  logout():void{
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }

}
