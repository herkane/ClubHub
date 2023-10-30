import {Component, ElementRef, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  onParticipateClick(childElement: ActivityCardComponent) {
    childElement.participate()
  }

  onCancelClick(childElement: ActivityCardComponent) {
    childElement.cancel()
  }

}
