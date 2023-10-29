import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }
}
