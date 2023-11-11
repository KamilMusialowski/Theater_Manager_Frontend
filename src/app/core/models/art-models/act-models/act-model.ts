import {SceneModel} from "../scene-models/scene-model";

export class ActModel {
  number: number;
  scenes: SceneModel[] = [];

  constructor(number: number) {
    this.number = number;
  }
}
