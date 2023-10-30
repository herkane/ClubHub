import {Component, ElementRef, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";

@Component({
  selector: 'app-propsitions',
  templateUrl: './propsitions.component.html',
  styleUrls: ['./propsitions.component.css']
})
export class PropsitionsComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}


  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  accept() {
    alert("Activity Accepted")
  }

  refuse() {
    alert("Activity Refused")
  }
}
