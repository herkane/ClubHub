import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../api.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{
  requests: any
  childElement: any

  constructor(private apiService : ApiService) {
  }

  onAcceptMemberClick(childElement: any) {
    this.apiService.approveOrRefuseCandidate(childElement.user.id, "accept").subscribe((response: any) => {
      this.apiService.getUsersByRole("CANDIDATE").subscribe((response: any) => {
        this.requests = response;
      } )
    } )
  }

  onRefuseMemberClick(childElement: any) {
    this.apiService.approveOrRefuseCandidate(childElement.user.id, "refuse").subscribe((response: any) => {
      this.apiService.getUsersByRole("CANDIDATE").subscribe((response: any) => {
        this.requests = response;
      } )
    } )
  }

  ngOnInit(): void {
    this.apiService.getUsersByRole("CANDIDATE").subscribe((response: any) => {
      this.requests = response;
    })
  }

}
