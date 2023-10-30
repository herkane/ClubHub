import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

  participateStyle: any
  cancelStyle: any
  counter = 0
  participating = false
  counterStyle: any
  proposed_by: any;


  @Input() purpose: string = '';
  @Input() actionButtonLabel: string = '';
  @Output() onActionButtonClick = new EventEmitter<void>();
  @Input() actionButtonLabel2: string = '';
  @Output() onActionButtonClick2 = new EventEmitter<void>();

  participate() {
    this.participateStyle = {
      'display' : 'none'
    }
    this.cancelStyle = {
      'visibility' : ''
    }
    this.counter++
  }

  cancel() {
    this.participateStyle = {
      'visibility' : ''
    }
    this.cancelStyle = {
      'display' : 'none'
    }
    this.counter--
  }

  ngOnInit(): void {
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
