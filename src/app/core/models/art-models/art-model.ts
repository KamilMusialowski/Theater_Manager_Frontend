import {CharacterModel} from "./character-models/character-model";
import {ActModel} from "./act-models/act-model";

export class ArtModel {
  theaterId: string;
  title: string;
  author1: string;
  author2: string;
  author3: string;
  inputingUserId: string;
  characters: CharacterModel[] = [];
  acts: ActModel[] = [];


  constructor(theaterId: string, title: string, author_1: string, author_2: string, author_3: string, inputingUser: string) {
    this.theaterId = theaterId;
    this.title = title;
    this.author1 = author_1;
    this.author2 = author_2;
    this.author3 = author_3;
    this.inputingUserId = inputingUser;
  }
}
