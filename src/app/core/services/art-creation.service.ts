import {Injectable} from "@angular/core";
import {ArtModel} from "../models/art-models/art-model";
import {UserService} from "./user.service";
import {ActModel} from "../models/art-models/act-models/act-model";
import {Router} from "@angular/router";
import {CharacterModel} from "../models/art-models/character-models/character-model";
import {SceneModel} from "../models/art-models/scene-models/scene-model";
import {AxiosService} from "./axios-service/axios.service";

@Injectable({providedIn: "root"})
export class ArtCreationService {

  theaterId: string = '';
  artTitle: string = '';
  author_1: string = '';
  author_2: string = '';
  author_3: string = '';
  numberOfActs: number = 1;

  creatingArt: ArtModel = new ArtModel('','', '', '', '', '');

  constructor(private axiosService: AxiosService, private userService: UserService, private router: Router) {
  }

  saveArtCreateStartData(theaterId: string, title: string, author1: string, author2: string, author3: string, actsNumber: number) {
    this.theaterId = theaterId;
    this.artTitle = title;
    this.author_1 = author1;
    this.author_2 = author2;
    this.author_3 = author3;
    this.numberOfActs = actsNumber;
    this.creatingArt = new ArtModel(this.theaterId, this.artTitle, this.author_1, this.author_2, this.author_3, this.userService.loggedInUserId);
    for(let i = 1; i <= this.numberOfActs; i++) {
      this.creatingArt.acts.push(new ActModel(i));
    }
    this.router.navigate(['create-art-characters']);
  }

  saveCharacters(characters: CharacterModel[]) {
    this.creatingArt.characters = [...characters];
  }

  addSceneToAct(actNumber: number, scene: SceneModel) {
    this.creatingArt.acts[actNumber].scenes.push(scene);
  }

  onCreateArt() {
    return this.axiosService.request(
      "POST",
      "art/create",
      this.creatingArt,
      {}
    );
  }
}
