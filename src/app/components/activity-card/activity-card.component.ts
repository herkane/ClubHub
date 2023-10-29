import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

  participateStyle: any
  cancelStyle: any
  counter = 0
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
    this.participateStyle = {
      'display' : ''
    }
    this.cancelStyle = {
      'display': 'none'
    }
  }
}
