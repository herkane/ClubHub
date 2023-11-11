import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityCardComponent} from "../activity-card/activity-card.component";
import {SharedService} from "../../SharedService";
import {User} from "../../../models/user.interface";
import {ApiService} from "../../api.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit{

  @Input() purpose : any
  @Output() onAcceptMember = new EventEmitter<void>();
  @Output() onRefuseMember = new EventEmitter<void>();
  @Output() onFireMember = new EventEmitter<void>();
  @Input() user : User = {} as User
  acceptStyle : any
  refuseStyle : any
  licencierStyle : any
  currentRole : any

  constructor(private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit(): void {
    this.sharedService.currentRole.subscribe(role => {
      this.currentRole = role
    })
    console.log("current role")
    console.log(this.currentRole)
    if (this.purpose === 'members') {
      this.acceptStyle = {
        'display' : 'none'
      }
      this.refuseStyle = {
        'display' : 'none'
      }
      this.licencierStyle = {
        'visibility' : ''
      }
    } else if (this.purpose === 'requests') {
      this.acceptStyle = {
        'visibility' : ''
      }
      this.refuseStyle = {
        'visibility' : ''
      }
      this.licencierStyle = {
        'display' : 'none'
      }
    }
    if (this.user.id === this.authService.user.id) {
      this.licencierStyle = {
        'display' : 'none'
      }
    }
  }

}
