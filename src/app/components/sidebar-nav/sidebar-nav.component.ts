import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import { SharedService } from "../../SharedService";

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {

  @Output() current_page = new EventEmitter<string>();

  constructor(private router: Router, private sharedService: SharedService) {
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
        }
      }
    )
  }
}
