import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user.interface";
import {Router} from "@angular/router";

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

  constructor(private http: HttpClient, private router: Router) {
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
    if (this.base64image) {
      //this.newUser.image = this.base64image
      this.newUser.image = "The image works i just needed to comment it for long lines reasons"
      this.uploadFile(this.newUser).subscribe(
        (res) => {
          console.log("User created")
          console.log(res)
          this.router.navigate(['/request-sent'])
        },
        (err) => {
          console.log("User not created")
          console.log(err)
        }
      )
    }
  }

  uploadFile(user: any): Observable<any> {
    if (user) {
      return this.http.post<any>(`http://localhost:5000/register`, user)
    } else
    return new Observable()
  }
}
