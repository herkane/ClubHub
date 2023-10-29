import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }
}
