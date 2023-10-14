import {Injectable} from "@angular/core";
import {AxiosService} from "./axios-service/axios.service";
import {UserLoginModel} from "../models/user-models/user-login.model";
import {UserRegisterModel} from "../models/user-models/user-register.model";

@Injectable({providedIn: "root"})
export class UserService {
  constructor(private axiosService: AxiosService) {
  }

  onLogin(userLoggingIn: any): void {
    console.log(userLoggingIn);
    this.axiosService.request(
      "POST",
      "/login",
      {
        email: userLoggingIn.email,
        password: userLoggingIn.password
      }
    ).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
      });
  }

  onRegister(input: UserRegisterModel): void {

  }

  UserLoginModelToRequestData(userLM: UserLoginModel) {
    return {
      email: userLM.email,
      password: userLM.password
    }
  }
}
