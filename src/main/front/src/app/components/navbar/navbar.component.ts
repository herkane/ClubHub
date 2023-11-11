import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../auth/auth.service";
import {SharedService} from "../../SharedService";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() title : any
  currentSection: string | undefined
  isLoggedIn: any;
  currentUser: any;

  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService) {
    this.sharedService.currentSection.subscribe(section => this.currentSection = section)
    this.sharedService.currentUser.subscribe(section => this.currentUser = section)
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((data) => {
      this.isLoggedIn = data
    })
    this.sharedService.currentUser.subscribe((data) => {
      this.currentUser = data
    })
    console.log(this.currentUser)
  }

  goToActivities() {
    this.sharedService.changeSection('')
    this.sharedService.changeCurrentUser('')
    this.router.navigate(['/activities'])
  }

}
