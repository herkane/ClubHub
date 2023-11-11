import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivityCardComponent} from "../../../../components/activity-card/activity-card.component";
import {ActivitiesService} from "../../../../activities.service";

@Component({
  selector: 'app-propsitions',
  templateUrl: './propsitions.component.html',
  styleUrls: ['./propsitions.component.css']
})
export class PropsitionsComponent implements OnInit{
  constructor(private activitiesService: ActivitiesService) {}


  propositions : any

  accept(childElement: ActivityCardComponent) {
    this.activitiesService.approveOrRefuseActivity(childElement.activity.id, 'accept').subscribe(
      (res: any) => {
        console.log(res)
        this.activitiesService.loadActivities('pending').subscribe((data) => {
            this.propositions = data
          }
        )
      }, (err) => {
        console.log("Activity not updated")
        console.log(err)
      }
    )
  }

  refuse(childElement: ActivityCardComponent) {
    this.activitiesService.approveOrRefuseActivity(childElement.activity.id, 'refuse').subscribe(
      (res: any) => {
        console.log(res)
        this.activitiesService.loadActivities('pending').subscribe((data) => {
            this.propositions = data
          }
        )
      }, (err) => {
        console.log("Activity not updated")
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.activitiesService.loadActivities('pending').subscribe((data) => {
      this.propositions = data
    },
      (error) => {
        console.log("Error loading propositions")
        console.log(error)
      }
    )
  }


}
