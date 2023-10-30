import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClubHub';

  constructor(private authService : AuthService, private router: Router) {
    initFlowbite()
  }

  ngOnInit(): void {
    initFlowbite()
  }


}
