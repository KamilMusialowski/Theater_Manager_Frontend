import {Injectable} from "@angular/core";
import {AxiosService} from "./axios-service/axios.service";
import {UserLoginModel} from "../models/user-models/user-login.model";
import {UserRegisterModel} from "../models/user-models/user-register.model";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class UserService {
  constructor(private axiosService: AxiosService, private router: Router) {
  }

  onLogin(userLoggingIn: UserLoginModel): void {
    this.axiosService.request(
      "POST",
      "/login",
      userLoggingIn
    ).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this.router.navigate(['main-view']);
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
      });
  }

  onRegister(userRegistering: UserRegisterModel): any {
    this.axiosService.request(
      "POST",
      "/register",
      userRegistering
    ).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this.router.navigate(['main-view']);
      }).catch(error => {
      this.axiosService.setAuthToken(null);
    });
  }
}
