import {Component} from '@angular/core';
import {UserRegisterModel} from "../../models/user-models/user-register.model";
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {SystemRoleModel} from "../../models/system-role-models/system-role.model";
import {SystemRoleEnum} from "../../models/enums/system-role-enum";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class RegisterPageComponent {

  constructor(private userService: UserService) {
  }

  sexDeafaultValue: string = "NONE";

  managerRole: boolean = false;
  directorRole: boolean = false;
  actorRole: boolean = false;

  userRegisterModel: UserRegisterModel = new UserRegisterModel("", "", "", "", "", "", this.sexDeafaultValue, []);

  onSexSelected(value: string): void {
    this.userRegisterModel._sex = value;
  }

  onSubmitRegister(): void {
    console.log(this.managerRole);
    this.prepareRolesArray();
    this.userService.onRegister(
      this.userRegisterModel
    );
  }

  prepareRolesArray(): void {
    if(this.managerRole) {
      this.userRegisterModel._systemRoles.push(new SystemRoleModel(SystemRoleEnum.MANAGER));
      this.managerRole = false;
    }
    if(this.directorRole) {
      this.userRegisterModel._systemRoles.push(new SystemRoleModel(SystemRoleEnum.DIRECTOR));
      this.directorRole = false;
    }
    if(this.actorRole) {
      this.userRegisterModel._systemRoles.push(new SystemRoleModel(SystemRoleEnum.ACTOR));
      this.actorRole = false;
    }
  }
}
