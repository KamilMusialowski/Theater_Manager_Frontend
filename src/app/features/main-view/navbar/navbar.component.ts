import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SystemRoleModel} from "../../../core/models/system-role-models/system-role.model";
import {SystemRoleEnum} from "../../../core/models/enums/system-role-enum";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    NgIf
  ],
  standalone: true
})
export class NavbarComponent implements OnChanges{

  @Input() userSystemRoles: SystemRoleModel[] = [];

  private userIsManager: boolean = false;
  private userIsDirector: boolean = false;
  private userIsActor: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this._userIsManager = false;
    this._userIsDirector = false;
    this._userIsActor = false;
    for (const element of this.userSystemRoles) {
      if (element.systemRole === SystemRoleEnum.MANAGER) {
        this._userIsManager = true;
      }
      if (element.systemRole === SystemRoleEnum.DIRECTOR) {
        this._userIsDirector = true;
      }
      if (element.systemRole === SystemRoleEnum.ACTOR) {
        this._userIsActor = true;
      }
    }
  }


  get _userIsManager(): boolean {
    return this.userIsManager;
  }

  set _userIsManager(value: boolean) {
    this.userIsManager = value;
  }

  get _userIsDirector(): boolean {
    return this.userIsDirector;
  }

  set _userIsDirector(value: boolean) {
    this.userIsDirector = value;
  }

  get _userIsActor(): boolean {
    return this.userIsActor;
  }

  set _userIsActor(value: boolean) {
    this.userIsActor = value;
  }
}
