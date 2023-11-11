import {CharacterModel} from "../character-models/character-model";

export class SceneModel {
  number: number;
  theatreCharacters: CharacterModel[] = [];

  constructor(number: number) {
    this.number = number;
  }
}
