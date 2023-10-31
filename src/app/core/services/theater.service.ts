import {Injectable} from "@angular/core";
import {TheatreCreateModel} from "../models/theatre-models/theatre-create-model";
import {AxiosService} from "./axios-service/axios.service";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {TheatreCreateObject} from "../requests-data-objects/theatre-requests-objects/TheatreCreateObject";

@Injectable({providedIn: "root"})
export class TheaterService {

  constructor(private axiosService: AxiosService, private router: Router, private userService: UserService) {
  }

  onCreate(theaterModel: TheatreCreateModel): Promise<any> {
    let requestDataObject: TheatreCreateObject = new TheatreCreateObject(this.userService.loggedInUserId, theaterModel);
    return this.axiosService.request(
      "POST",
      "/theater/create",
      requestDataObject,
      {}
    );
  }

  getTheatersOfManager(managerId: string): Promise<any> {
    return this.axiosService.request(
      "GET",
      "/theater/getTheatersOfManager",
      {
      },
      {managerId}
    );
  }
}
