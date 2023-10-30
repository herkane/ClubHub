import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityCardComponent} from "../activity-card/activity-card.component";

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

  ngOnInit(): void {
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
