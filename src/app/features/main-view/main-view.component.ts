import {Component, forwardRef, OnInit} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {SystemRoleModel} from "../../core/models/system-role-models/system-role.model";
import {RouterOutlet} from "@angular/router";
import {FeaturesModule} from "../features.module";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  imports: [
    forwardRef(() => [
      HeaderComponent,
      NavbarComponent
    ]),
    RouterOutlet,
    NavbarComponent,
  ],
  standalone: true
})
export class MainViewComponent implements OnInit {

  private data: any = null;
  private userName: string = '';
  private userId: string = '';
  private userSystemRoles: SystemRoleModel[] = [];

  ngOnInit() {
    this.data = history.state;
    this.initUserInfo();
  }

  private initUserInfo() {
    this._userName = this.data.userName;
    this._userId = this.data.userId;
    this._userSystemRoles = this.data.userRoles;
  }


  get _userName(): string {
    return this.userName;
  }

  set _userName(value: string) {
    this.userName = value;
  }

  get _userId(): string {
    return this.userId;
  }

  set _userId(value: string) {
    this.userId = value;
  }

  get _userSystemRoles(): SystemRoleModel[] {
    return this.userSystemRoles;
  }

  set _userSystemRoles(value: SystemRoleModel[]) {
    this.userSystemRoles = value;
  }
}
