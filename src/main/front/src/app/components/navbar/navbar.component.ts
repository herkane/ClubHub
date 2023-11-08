import {Component, Input, OnInit, OnDestroy, Renderer2, ElementRef} from '@angular/core';
import {User} from "../../../models/user.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import * as AuthActions from '../../../models/actions/user.actions'
import {Route, Router} from '@angular/router';
import {AuthService} from "../../auth/auth.service";
import {UserState} from "../../../models/reducers/user.reducer";
import {loadUser, logout} from "../../../models/actions/user.actions";
import {SharedService} from "../../SharedService";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() title : any
  currentSection: string | undefined

  constructor(private sharedService: SharedService) {
    this.sharedService.currentSection.subscribe(section => this.currentSection = section)
  }

  protected readonly select = select;

  ngOnInit(): void {
    this.sharedService.currentSection.subscribe(section => this.currentSection = section)
  }
}