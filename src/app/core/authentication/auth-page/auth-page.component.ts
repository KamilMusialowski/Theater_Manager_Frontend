import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../../core.module";
import {AxiosService} from "../../services/axios-service/axios.service";
import {LoginPageComponent} from "../login-page/login-page.component";
import {UserLoginModel} from "../../models/user-models/user-login.model";
import {UserService} from "../../services/user.service";
import {RegisterPageComponent} from "../register-page/register-page.component";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
  imports: [
    NgClass,
    FormsModule,
    CoreModule,
    LoginPageComponent,
    RegisterPageComponent
  ],
  standalone: true
})
export class AuthPageComponent {
  active: string = "login";

  constructor(private userService: UserService) {}

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  getUserService(): UserService {
    return this.userService;
  }
}
