import {TheatreCreateModel} from "../../models/theatre-models/theatre-create-model";

export class TheatreCreateObject {

  public userCreatorId: string;
  public theatreModel: TheatreCreateModel;


  constructor(userCreatorId: string, theatreModel: TheatreCreateModel) {
    this.userCreatorId = userCreatorId;
    this.theatreModel = theatreModel;
  }
}
