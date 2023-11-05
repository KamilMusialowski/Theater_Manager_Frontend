import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserLoginModel} from "../../models/user-models/user-login.model";
import {UserService} from "../../services/user.service";

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

  constructor(private userService: UserService) {
  }

  userLoginModel: UserLoginModel = new UserLoginModel("test@test.pl", "test")

  onSubmitLogin(): void {
    this.userService.onLogin(
      this.userLoginModel
    );
  }
}
