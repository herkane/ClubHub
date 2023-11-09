import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user.interface";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  selectedFile: File | null = null
  base64image: string | null = null
  newUser: User = {} as User

  @Output() actionButton = new EventEmitter<void>()
  signupForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    fullName: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, Validators.required)
  });

  constructor(private http: HttpClient, private router: Router, private authService : AuthService) {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]

    const reader = new FileReader()
    reader.onload = () => {
      this.base64image = reader.result as string
    }
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onSubmit() {
    console.log(this.signupForm.controls)
    if (this.signupForm.invalid) {
      alert('invalid form')
      return
    }
    this.authService.register(this.signupForm.value).subscribe(
      (res: any) => {
        if (this.base64image) {
          //this.newUser.image = this.base64image
          this.newUser.image = "The image works i just needed to comment it for long lines reasons"
        }
        this.router.navigate(['/request-sent'])
      }, (err) => {
        console.log("User not created")
        console.log(err)
      }
    )
  }
}
