import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityInterface} from "../../../models/activity.interface";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {SharedService} from "../../SharedService";
import {ActivitiesService} from "../../activities.service";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})


export class ActivityCardComponent implements OnInit {

  participateStyle: any
  cancelStyle: any
  deleteStyle: any;
  propositionStyle: any;
  participating = false
  counterStyle: any
  proposed_by: any
  currentPath : any
  memberStyle: any
  user: any
  currentRole: any
  isParticipating: boolean = false;
  isLoggedIn: boolean = false;
  @Input() activity : ActivityInterface = {} as ActivityInterface;


  @Input() routeLink: string = '';
  @Input() purpose: string = '';
  @Input() actionButtonLabel: string = '';
  @Output() onActionButtonClick = new EventEmitter<void>();
  @Output() onActionButtonClick2 = new EventEmitter<void>();
  @Output() onActionButtonClick3 = new EventEmitter<void>();
  @Output() onActionButtonClick4 = new EventEmitter<void>();
  @Output() onActionButtonClick5 = new EventEmitter<void>();


  constructor(private router : Router, private authService: AuthService, private sharedService : SharedService, private activityService : ActivitiesService) {
  }
  participate() {
    this.participateStyle = {
      'display' : 'none'
    }
    this.cancelStyle = {
      'visibility' : ''
    }
    this.deleteStyle = {
      'display' : 'none'
    }
  }

  isParticipatingInActivity(): boolean {
    this.activityService.isParticipating(this.activity.id, this.authService.user.id).subscribe(
      (res: boolean) => {
        this.isParticipating = res
      }, (err) => {
        console.log("Activity not added")
        console.log(err)
      }
    )
    return this.isParticipating
  }

  cancel() {
    this.isParticipating = false
  }

  delete() {
    this.participateStyle = {
      'display' : 'none'
    }
    this.cancelStyle = {
      'display' : 'none'
    }
    this.deleteStyle = {
      'visibility' : ''
    }
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn
      }
    )
    if (this.isLoggedIn) {
      this.isParticipatingInActivity()
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
      this.deleteStyle = {
        'display': 'none'
      }
      this.propositionStyle = {
        'display': 'none'
      }
      if (this.purpose === 'Delete') {
        this.participateStyle = {
          'display': 'none',
        }
        this.propositionStyle = {
          'display': 'none'
        }
        this.deleteStyle = {
          'visibility': ''
        }
        this.cancelStyle = {
          'display': 'none'
        }
      } else if (this.purpose === 'Proposition') {
        this.counterStyle = {
          'display': 'none'
        }
        this.cancelStyle = {
          'display': 'none'
        }
        this.proposed_by = {
          'visibility': ''
        }
        this.participateStyle = {
          'display': 'none'
        }
        this.deleteStyle = {
          'display': 'none'
        }
        this.propositionStyle = {
          'display': ''
        }
      } else if (this.purpose === 'Participate') {
        this.participateStyle = {
          'display': ''
        }
        this.cancelStyle = {
          'display': ''
        }
        this.proposed_by = {
          'display': 'none'
        }
        this.deleteStyle = {
          'display': 'none'
        }
      }
      this.participating = false
    }
  }

}
