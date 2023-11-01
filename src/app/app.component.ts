import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import {SharedService} from "./SharedService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ClubHub';

  constructor(private authService : AuthService, private router: Router) {
    initFlowbite()
  }

  ngOnInit(): void {
    console.log("Init flowbite")
    initFlowbite()
  }

  ngAfterViewInit(): void {
  }


}
