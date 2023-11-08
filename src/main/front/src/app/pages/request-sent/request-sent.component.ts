import { Component } from '@angular/core';
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-request-sent',
  templateUrl: './request-sent.component.html',
  styleUrls: ['./request-sent.component.css']
})
export class RequestSentComponent {

  constructor(private router: Router) {
  }

  goToHome() {
    this.router.navigate(['/'])
  }
}
