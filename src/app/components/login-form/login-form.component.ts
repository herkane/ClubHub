import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  user: User = {} as User;
  result : any;
  @Output() actionButtonClick =  new EventEmitter<void>;

  constructor(private router: Router, private store : Store, private authService : AuthService, private sharedService: SharedService) {

  }


  handleLogin() {
    this.loading$.next(true);
    this.error$.next('');

    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe(
      (data) => {
        console.log("Data")
        console.log(data)
        console.log("Credentials")
        console.log(credentials)
        if (data.email === credentials.username && data.password === credentials.password) {
          this.result = data;
          console.log("Result")
          console.log(this.result);
          this.user = this.result.body;
          this.store.dispatch(login({user: this.user}));
          this.sharedService.changeSection('Tableau de bord');
          this.router.navigate(['/dashboard']);
          this.loading$.next(true);
        } else {
          this.loading$.next(true);
          this.error$.next('Invalid username or password. Please try again.');
        }
      },
      (error) => {
        this.loading$.next(false);
        this.error$.next('Invalid username or password. Please try again.');
      }
    );
  }
}
