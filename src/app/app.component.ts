import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClubHub';

  constructor(private authService : AuthService, private router: Router) {
    if (this.authService.isLoggedIn()){
      /*this.authService.getUser().subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user))
        this.router.navigate(['/dashboard'])
      }
      )*/
    }
  }

  ngOnInit(): void {
    initFlowbite()
  }
}
