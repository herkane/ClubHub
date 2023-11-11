import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
import {ActivitiesService} from "../../../../activities.service";
import {ActivityInterface} from "../../../../../models/activity.interface";
import {AuthService} from "../../../../auth/auth.service";
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit{

  constructor(private activityService : ActivitiesService, private authService: AuthService) {}


  activities : ActivityInterface[] = []
  loggedInStyle: any

  onParticipateClick(childElement: ActivityCardComponent) {
    this.activityService.participate(childElement.activity.id, this.authService.user.id).subscribe(
      (res: any) => {
        this.activityService.loadActivities('ok').subscribe((data) => {
          this.activities = data
        })
      }, (err) => {
        console.log("Activity not added")
        console.log(err)
      }
    )
  }

  onCancelClick(childElement: ActivityCardComponent) {
    this.activityService.cancel_participation(childElement.activity.id, this.authService.user.id).subscribe(
(res: any) => {
        childElement.cancel()
        this.activityService.loadActivities('ok').subscribe((data) => {
          this.activities = data
        })
      }, (err) => {
        console.log("Activity not added")
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    console.log("Activities component init")
    this.authService.isLoggedIn$.subscribe((data) => {
      if (!data) {
        this.loggedInStyle = {
          'justify-content': 'center',
          'margin-left': '0'
        }
      }
    })
    this.activityService.loadActivities('ok').subscribe((data) => {
      this.activities = data
    })
  }
}
