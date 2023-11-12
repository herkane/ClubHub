import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../api.service";
import {SharedService} from "../../../../SharedService";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{

  members: any

  onFireMember(childElement: any) {
    if (childElement.user.id === this.authService.user.id) {
      return
    }
    this.apiService.approveOrRefuseCandidate(childElement.user.id, "fire").subscribe((response: any) => {
      this.apiService.getUsersByRole("MEMBER").subscribe((response: any) => {
        this.members = response;
      } )
    })
  }

  constructor(private apiService : ApiService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.apiService.getUsersByRole("MEMBER").subscribe((response: any) => {
      this.members = response;
    })
  }

  promoteToVIPClick(childElement: any) {
    if (childElement.user.role === this.authService.user.id) {
      return
    }
    this.apiService.approveOrRefuseCandidate(childElement.user.id, "promote").subscribe((response: any) => {
      this.apiService.getUsersByRole("MEMBER").subscribe((response: any) => {
        this.members = response;
      } )
    })

  }
}
