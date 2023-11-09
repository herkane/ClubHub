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


  activities : any
  loggedInStyle: any;

  onParticipateClick(childElement: ActivityCardComponent) {
    childElement.participate()
  }

  onCancelClick(childElement: ActivityCardComponent) {
    childElement.cancel()
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((data) => {
      if (data) {
        this.loggedInStyle = {

        }
      } else {
        this.loggedInStyle = {
          'justify-content': 'center',
          'margin-left': '0'
        }
      }
    })
    this.activityService.loadActivities().subscribe((data) => {
      this.activities = data
      console.log(this.activities)
    })
  }

}
