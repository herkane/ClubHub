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
    author: new FormControl(this.authService.user.fullName),
  });
  selectedFile: File | null = null
  base64image: string | null = null
  activity: any

  constructor(private activitiesService: ActivitiesService, private router: Router, private sharedService: SharedService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  addActivity() {
    if (this.addActivityGroup.invalid) {
      alert('invalid form')
      return
    }
    this.activity = this.addActivityGroup.value
    this.activity.image = this.base64image
    this.activitiesService.addActivity(this.activity, this.authService.user.id).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard']);
        this.sharedService.changeSection('Tableau de bord');
      }, (err) => {
        console.log("Activity not added")
        console.log(err)
      }
    )
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]

    const reader = new FileReader()
    reader.onload = () => {
      this.base64image = reader.result as string
    }
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile)
    }
  }
}
