import {Injectable} from "@angular/core";
import {AxiosService} from "./axios-service/axios.service";

@Injectable({providedIn: "root"})
export class RehearsalService {

  private _artId: string = '';
  private _theaterId: string = '';


  constructor(private axiosService: AxiosService) {
  }

  onRehearalCreate(startDate: string, endDate: string, hallId: string) {
    return this.axiosService.request(
      "POST",
      "/events/create",
      {
        startDate: startDate,
        endDate: endDate,
        hallId: hallId,
        artId: this.artId
      },
      {}
    );
  }

  onGetUserEvents(userId: string) {
    return this.axiosService.request(
      "GET",
      "/events/user_events",
      {},
      {
        userId: userId
      }
    );
  }

  get artId(): string {
    return this._artId;
  }

  set artId(value: string) {
    this._artId = value;
  }

  get theaterId(): string {
    return this._theaterId;
  }

  set theaterId(value: string) {
    this._theaterId = value;
  }
}
