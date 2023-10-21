import {SystemRoleEnum} from "../enums/system-role-enum";

export class SystemRoleModel {

  private systemRole: SystemRoleEnum;


  constructor(systemRole: SystemRoleEnum) {
    this.systemRole = systemRole;
  }


  get _systemRole(): SystemRoleEnum {
    return this.systemRole;
  }

  set _systemRole(value: SystemRoleEnum) {
    this.systemRole = value;
  }
}
