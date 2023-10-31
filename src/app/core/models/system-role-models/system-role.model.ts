import {SystemRoleEnum} from "../enums/system-role-enum";

export class SystemRoleModel {

  public systemRole: SystemRoleEnum;


  constructor(systemRole: SystemRoleEnum) {
    this.systemRole = systemRole;
  }


  public get _systemRole(): SystemRoleEnum {
    return this.systemRole;
  }

 public set _systemRole(value: SystemRoleEnum) {
    this.systemRole = value;
  }
}
