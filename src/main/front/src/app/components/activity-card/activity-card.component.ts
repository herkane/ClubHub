import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityInterface} from "../../../models/activity.interface";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {SharedService} from "../../SharedService";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})


export class ActivityCardComponent implements OnInit {

  participateStyle: any
  cancelStyle: any
  participating = false
  counterStyle: any
  proposed_by: any;
  currentPath : any
  memberStyle: any
  user: any
  currentRole: any
  @Input() activity : ActivityInterface = {} as ActivityInterface;


  @Input() routeLink: string = '';
  @Input() purpose: string = '';
  @Input() actionButtonLabel: string = '';
  @Output() onActionButtonClick = new EventEmitter<void>();
  @Input() actionButtonLabel2: string = '';
  @Output() onActionButtonClick2 = new EventEmitter<void>();


  constructor(private router : Router, private authService: AuthService, private sharedService : SharedService) {
  }
  participate() {
    this.participateStyle = {
      'display' : 'none'
    }
    this.cancelStyle = {
      'visibility' : ''
    }
    this.activity.participantsNumber++
  }

  cancel() {
    this.participateStyle = {
      'visibility' : ''
    }
    this.cancelStyle = {
      'display' : 'none'
    }
    this.activity.participantsNumber--
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.sharedService.currentRole.subscribe(
      role => this.currentRole = role
    )
    if (!this.currentRole) {
      this.memberStyle = {
        'display': 'none'
      };
    }

    this.currentPath = this.router.url
    this.proposed_by = {
      'display': 'none'
    }
    this.participateStyle = {
      'display' : ''
    }
    this.cancelStyle = {
      'display': 'none'
    }
    if (this.purpose === 'Delete') {
      this.participateStyle = {
        'display': 'none',
      }
      this.cancelStyle = {
        'visibility': ''
      }
    } else if (this.purpose === 'Proposition') {
      this.counterStyle = {
        'display': 'none'
      }
      this.cancelStyle = {
        'visibility': ''
      }
      this.proposed_by = {
        'visibility': ''
      }
    }
    this.participating = false
  }

}
