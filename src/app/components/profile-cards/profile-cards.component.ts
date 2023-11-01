import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityCardComponent} from "../activity-card/activity-card.component";
import {SharedService} from "../../SharedService";

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
  acceptStyle : any
  refuseStyle : any
  licenierStyle : any
  currentRole : any

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentRole.subscribe(role => this.currentRole = role)
    console.log(this.currentRole)
    if (this.purpose === 'members') {
      this.acceptStyle = {
        'display' : 'none'
      }
      this.refuseStyle = {
        'display' : 'none'
      }
      this.licenierStyle = {
        'visibility' : ''
      }
    } else if (this.purpose === 'requests') {
    this.acceptStyle = {
        'visibility' : ''
      }
      this.refuseStyle = {
        'visibility' : ''
      }
      this.licenierStyle = {
        'display' : 'none'
      }
    }
  }

}
