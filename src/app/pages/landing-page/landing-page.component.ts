import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  loginStyle: any;
  signupStyle: any;

  constructor() {
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
}
