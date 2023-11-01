import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import { SharedService } from "../../SharedService";
import {logout} from "../../../models/actions/user.actions";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit, OnDestroy{

  user = this.authService.user;
  adminStyle: any
  vipStyle: any
  memberStyle: any
  whatIsUser: string | undefined


  constructor(private router: Router, private sharedService: SharedService, private authService: AuthService) {
  }

  ngOnDestroy(): void {
    this.sharedService.changeSection('')
    console.log("I am on the sidebar component destroyed")
  }

  ngOnInit(): void {
    if (this.user?.roles?.includes('admin')) {
      console.log("This user has an Admin role")
      this.whatIsUser = 'admin'
      this.sharedService.changeUserRole('admin')
    } else if (this.user?.roles?.some((role: string) => role === 'vip')) {
      console.log("This user has a VIP role")
      this.whatIsUser = 'vip'
      this.sharedService.changeUserRole('vip')
      this.adminStyle = {
        'display': 'none'
      }
    } else if (this.user?.roles?.includes('member')) {
      console.log("This user has a Member role")
      this.whatIsUser = 'member'
      this.sharedService.changeUserRole('member')
      this.vipStyle = {
        'display': 'none'
      }
      this.adminStyle = {
        'display': 'none'
      }
    } else {
      console.log("This user has a Visitor role")
      this.whatIsUser = 'visitor'
      this.memberStyle = {
        'display': 'none'
      }
      this.vipStyle = {
        'display': 'none'
      }
      this.adminStyle = {
        'display': 'none'
      }
    }
  }

  navigateTo(route: string) {

    this.router.navigate([route]).then(
      r => {
        switch (route) {
          case 'dashboard':
            this.sharedService.changeSection('Tableau de bord');
            break;
          case 'dashboard/new-activity':
            this.sharedService.changeSection('Ajouter nouvelle activité');
            break;
          case 'dashboard/delete-activity':
            this.sharedService.changeSection('Supprimmer une activité');
            break;
          case 'dashboard/propositions':
            this.sharedService.changeSection('Propositions d\'activités');
            break;
          case 'dashboard/requests':
            this.sharedService.changeSection('Demandes d\'adhésion');
            break;
          case 'dashboard/members':
            this.sharedService.changeSection('Adhérents');
            break;
          default:
            this.sharedService.changeSection('');
            break;
        }
      }
    )
  }


  logout() {
    this.authService.logout();
    this.sharedService.changeSection('')
    this.router.navigate(['/']);
  }
}
