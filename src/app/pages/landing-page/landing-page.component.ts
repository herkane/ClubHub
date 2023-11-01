import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  loginStyle: any;
  signupStyle: any;
  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loginStyle = {
      'visibility': '',
    }
    this.signupStyle = {
      'display': 'none',
    };
  }

  goToSignUp() {
    this.loginStyle = {
      'display': 'none',
    }
    this.signupStyle = {
      'visibility': '',
    };
  }

  goToLogin() {
    this.loginStyle = {
      'visibility': '',
    }
    this.signupStyle = {
      'display': 'none',
    };
  }

  ngOnInit(): void {
    console.log('Landing page');
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    })
    console.log(this.isLoggedIn);
  }
}
