import {Component, ElementRef, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  delete() {
    alert("Activity deleted")
  }
}
