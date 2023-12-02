import {Injectable} from "@angular/core";
import {TheatreCreateModel} from "../models/theatre-models/theatre-create-model";
import {AxiosService} from "./axios-service/axios.service";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {TheatreCreateObject} from "../requests-data-objects/theatre-requests-objects/TheatreCreateObject";
import {HallModel} from "../models/hall-models/hall.model";
import {TheatreEditModel} from "../models/theatre-models/theater-edit.model";

@Injectable({providedIn: "root"})
export class TheaterService {

  constructor(private axiosService: AxiosService, private router: Router, private userService: UserService) {
  }

  private _theaterId: string = '';

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
      {},
      {managerId}
    );
  }

  addNewPersonel(personelEmail: string, theaterId: string, role: any): Promise<any> {
    let requestDataObject = {
      personelEmail: personelEmail,
      theaterId: theaterId,
      role: role
    }
    return this.axiosService.request(
      "POST",
      "theater/addPersonel",
      requestDataObject,
      {}
    )
  }

  getActors(theatreId: string) {
    return this.axiosService.request(
      "GET",
      "theater/getActors",
      {},
      {theatreId}
    )
  }

  createTheatreHall(hall: HallModel, theaterId: string) {
    return this.axiosService.request(
      "POST",
      "theater/createHall",
      {
        hallModel: hall,
        theaterId: theaterId
      },
      {}
    )
  }

  getTheaterHalls(theaterId: string) {
    return this.axiosService.request(
      "GET",
      "theater/getHalls",
      {},
      {theaterId}
    )
  }

  getTheater(theaterId: string) {
    return this.axiosService.request(
      "GET",
      "theater/getTheater",
      {},
      {theaterId}
    );
  }

  editTheater(theater: TheatreEditModel) {
    return this.axiosService.request(
      "POST",
      "theater/editTheater",
      theater,
      {}
    );
  }

  getTheaterPersonel() {
    let theaterId = this._theaterId
    return this.axiosService.request(
      "GET",
      "theater/getPersonel",
      {},
      {theaterId}
    );
  }

  deleteTheaterPersonel(personelId: string) {
    return this.axiosService.request(
      "GET",
      "theater/deletePersonel",
      {},
      {
        personelId
      }
    );
  }

  get theaterId(): string {
    return this._theaterId;
  }

  set theaterId(value: string) {
    this._theaterId = value;
  }
}
