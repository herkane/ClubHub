import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
import {ActivitiesService} from "../../../../activities.service";
import {ActivityInterface} from "../../../../../models/activity.interface";
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit{

  constructor(private activityService : ActivitiesService) {}


  activities : ActivityInterface[] = []

  onParticipateClick(childElement: ActivityCardComponent) {
    childElement.participate()
  }

  onCancelClick(childElement: ActivityCardComponent) {
    childElement.cancel()
  }

  ngOnInit(): void {
    this.activityService.loadActivities().subscribe((data) => {
      this.activities = data
      console.log(this.activities)
    })
  }

}