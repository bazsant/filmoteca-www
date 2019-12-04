import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Filmoteca';

  isLogin = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isLogin = (val as NavigationEnd).url == '/login';
        console.log((val as NavigationEnd));        
        console.log(this.isLogin);        
      }
    });
  }

  ngOnInit(): void {

  }

}
