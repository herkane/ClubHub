import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }
}
