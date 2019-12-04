import { Component, OnInit } from '@angular/core';
import * as MD5 from "md5";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(user, pass){    
    localStorage.setItem("login", JSON.stringify({ "user": user, "pass": MD5(pass)}));
    this.router.navigate([""]);
  }

}
