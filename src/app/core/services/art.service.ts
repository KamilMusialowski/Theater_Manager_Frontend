import {Injectable} from "@angular/core";
import {AxiosService} from "./axios-service/axios.service";
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({providedIn: "root"})
export class ArtService {

  constructor(private axiosService: AxiosService, private router: Router, private userService: UserService) {
  }

  getDirectorsArts() {
    let directorId = this.userService.loggedInUserId;
    return this.axiosService.request(
      "GET",
      "/art/directors_arts",
      {},
      {directorId}
    );
  }

  getTheaterArt(artId: string) {
    return this.axiosService.request(
      "GET",
      "/art/get_art",
      {},
      {
        artId: artId
      }
    )
  }

  assignRolesToActors(artId: string, assignedRoles: any) {
    return this.axiosService.request(
      "POST",
      "art/assign_roles",
      {
        assignedRoles: assignedRoles,
        artId: artId
      },
      {}
    )
  }
}
