import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivityInterface} from "../../../models/activity.interface";
import {SharedService} from "../../SharedService";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {ActivitiesService} from "../../activities.service";

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.css']
})
export class NewActivityFormComponent implements OnInit{

  addActivityGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
    participantsLimit: new FormControl(null, Validators.required),
    departure_date: new FormControl(null, Validators.required),
    arrival_date: new FormControl(null, Validators.required),
    image: new FormControl(null),
    author: new FormControl(this.authService.user.fullName),
  });

  constructor(private activitiesService: ActivitiesService, private router: Router, private sharedService: SharedService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  addActivity() {
    if (this.addActivityGroup.invalid) {
      alert('invalid form')
      return
    }
    this.activitiesService.addActivity(this.addActivityGroup.value, this.authService.user.id).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard']);
        this.sharedService.changeSection('Tableau de bord');
      }, (err) => {
        console.log("Activity not added")
        console.log(err)
      }
    )
  }
}
