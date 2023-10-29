import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.model";
import {Route, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import * as AuthActions from '../../../models/actions/user.actions'
import {AuthService} from "../../auth/auth.service"
import {loadUser, login} from "../../../models/actions/user.actions";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm : FormGroup
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    token: ''
  };
  result : any;

  constructor(private fb: FormBuilder, private router: Router, private store : Store, private authService : AuthService) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      name: [],
      id: [],
      token: []
    });
    this.store.dispatch(loadUser())
  }


  async handleLogin() {
    this.loginForm.setValue(this.user)
    /*try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      console.log('LoginForm : ' + this.loginForm.get('email')?.value)
      this.result = users.find(
        (user: any) => user.email === this.loginForm.get('email')?.value && user.password === this.loginForm.get('password')?.value
      );
      if (this.loginForm.valid && this.result) {
        console.log("Logged in successfully");
        console.log(this.result);
        this.store.dispatch(AuthActions.login({user: this.result}))
        await this.router.navigate(['/dashboard']);
      } else {
        console.log(this.loginForm)
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }*/
    try {
      //console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe((res) => {
        /*this.result = users.find(
          (user: any) => user.email === this.loginForm.get('email')?.value && user.password === this.loginForm.get('password')?.value
        );*/
        console.log("Logged in successfully :");
        console.log(res[0]);
        this.store.dispatch(login({user: res[0]}))
        localStorage.setItem('user', JSON.stringify(res[0]));
        this.authService.storeToken(res[0].token);
        console.log("Logged in successfully :");
        console.log(res[0].token);
        //this.store.dispatch(AuthActions.login({user: res[0]}))
        this.router.navigate(['/dashboard']);
      }
      )
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
