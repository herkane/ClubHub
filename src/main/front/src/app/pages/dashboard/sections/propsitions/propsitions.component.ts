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

  accept() {
    alert("ActivityInterface Accepted")
  }

  refuse() {
    alert("ActivityInterface Refused")
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
