import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserLoginModel} from "../../models/user-models/user-login.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class LoginPageComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  // userLoginModel = {} as UserLoginModel;

  email: string = "";
  password: string = "";

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      "email": this.email,
      "password": this.password
    });
  }
}
