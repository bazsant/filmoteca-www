import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair(){
    localStorage.removeItem("login");
    this.router.navigate(["/login"]);
  }

}
