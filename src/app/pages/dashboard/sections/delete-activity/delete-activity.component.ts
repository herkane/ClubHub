import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
import {ActivitiesService} from "../../../../activities.service";

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent implements OnInit{

  constructor(private activitiesService : ActivitiesService) {}

  activities : any

  delete() {
    alert("ActivityInterface deleted")
  }

  ngOnInit(): void {
    this.activitiesService.loadActivities().subscribe((data) => {
      this.activities = data
    })
  }
}
