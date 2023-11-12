import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
import {ActivitiesService} from "../../../../activities.service";
import {ActivitiesComponent} from "../activities/activities.component";
import {Router} from "@angular/router";
import {ActivityInterface} from "../../../../../models/activity.interface";

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent implements OnInit{

  constructor(private activitiesService : ActivitiesService, private router: Router) {}

  activities : any[] = []
  user: any

  onDeleteClick(childElement: ActivityCardComponent) {
    this.activitiesService.deleteActivity(childElement.activity.id).subscribe(
      (res: any) => {
        console.log(res)
        this.activitiesService.loadActivities('ok').subscribe((data) => {
          this.activities = data
          }
        )
      }, (err) => {
        console.log("Activity not deleted")
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.activitiesService.loadActivities('ok').subscribe((data) => {
      this.activities = data
    })
  }
}
