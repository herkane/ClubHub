import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.interface";
import {Route, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import * as AuthActions from '../../../models/actions/user.actions'
import {AuthService} from "../../auth/auth.service"
import {loadUser, login} from "../../../models/actions/user.actions";
import {BehaviorSubject} from "rxjs";
import {SharedService} from "../../SharedService";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string | undefined;
  password: string | undefined;
  loading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string>('');
  result : any;
  @Output() actionButtonClick =  new EventEmitter<void>;
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private store : Store, private authService : AuthService, private sharedService: SharedService) {

  }


  handleLogin() {
    if (this.loginForm.invalid) {
      alert('invalid form')
      return
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.sharedService.changeCurrentUser(this.authService.user.fullName)
        this.router.navigate(['/dashboard']);
        this.sharedService.changeSection('Tableau de bord');
      }, (err) => {
        console.log("User not logged in")
        console.log(err)
      }
    )
  }
}
