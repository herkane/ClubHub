import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm : FormGroup
  user: User = new User('', '');
  result : undefined | User;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


  async handleLogin() {
    this.loginForm.setValue(this.user)
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      console.log('LoginForm : ' + this.loginForm.get('email')?.value)
      this.result = users.find(
        (user: User) => user.email === this.loginForm.get('email')?.value && user.password === this.loginForm.get('password')?.value
      );
      if (this.loginForm.valid && this.result) {
        console.log("Logged in successfully");
        console.log(this.result);
      } else {
        console.log(this.loginForm)
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
