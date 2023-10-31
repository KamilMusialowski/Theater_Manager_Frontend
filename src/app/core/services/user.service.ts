import {Injectable} from "@angular/core";
import {AxiosService} from "./axios-service/axios.service";
import {UserLoginModel} from "../models/user-models/user-login.model";
import {UserRegisterModel} from "../models/user-models/user-register.model";
import {NavigationExtras, Router} from "@angular/router";
import {SnackBarService} from "./util-services/snackBar.service";

@Injectable({providedIn: "root"})
export class UserService {

  _loggedInUserId: string = '';
  _loggedInUserFirstName: string = '';

  constructor(private axiosService: AxiosService, private router: Router, private snackBarService: SnackBarService) {
  }

  onLogin(userLoggingIn: UserLoginModel): void {
    this.axiosService.request(
      "POST",
      "/login",
      userLoggingIn,
      {}
    ).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this._loggedInUserId = response.data.id;
        this._loggedInUserFirstName = response.data.firstName1;
        const navExtras: NavigationExtras = {
          state: {
            userId: response.data.id,
            userName: response.data.firstName1,
            userRoles: response.data.systemRoles
          }
        };
        // this.snackBarService.showSnackBarWithDuration(response.data.firstName1 + " logged in!", 5);
        this.router.navigate(['main-view'], navExtras);
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
      });
  }

  onRegister(userRegistering: UserRegisterModel): any {
    this.axiosService.request(
      "POST",
      "/register",
      userRegistering,
      {}
    ).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this._loggedInUserId = response.data.id;
        this._loggedInUserFirstName = response.data.firstName1;
        const navExtras: NavigationExtras = {
          state: {
            userId: response.data.id,
            userName: response.data.firstName1,
            userRoles: response.data.systemRoles
          }
        };
        // this.snackBarService.showSnackBarWithDuration(response.data.firstName1 + "  registered!", 5);
        this.router.navigate(['main-view'], navExtras);
      }).catch(error => {
      this.axiosService.setAuthToken(null);
    });
  }

  getUsers(): Promise<any> {
    return this.axiosService.request(
      "GET",
      "/users/usersRestrictedView",
      {},
      {}
    );
  }


  get loggedInUserId(): string {
    return this._loggedInUserId;
  }

  get loggedInUserFirstName(): string {
    return this._loggedInUserFirstName;
  }
}
