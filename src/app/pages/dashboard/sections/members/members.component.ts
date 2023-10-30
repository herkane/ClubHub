import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  onFireMember() {
    alert("Member fired")
  }

}
