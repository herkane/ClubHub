import {Component, Input, OnInit} from '@angular/core';
import {ActivityInterface} from '../../../models/activity.interface';
import {User} from "../../../models/user.interface";
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../activities.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
  @Input() activity: ActivityInterface = {} as ActivityInterface;
  postId: number | undefined;
  post : ActivityInterface = {} as ActivityInterface;

  constructor(private route: ActivatedRoute, private activitiesService: ActivitiesService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.activitiesService.loadActivity(this.postId).subscribe(post => {
        this.post = post;
        console.log(this.post);
      })
    })
  }
}
