import {Component, OnInit} from '@angular/core';
import {AgGridModule} from "ag-grid-angular";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-change-password-view',
  templateUrl: './change-password-view.component.html',
  styleUrls: ['./change-password-view.component.css'],
  imports: [
    AgGridModule,
    NgClass,
    FormsModule
  ],
  standalone: true
})
export class ChangePasswordViewComponent implements OnInit{

  isExpanded: boolean = false;

  newPassword: string = '';

  userId: string = '';

  ngOnInit(): void {
    this.newPassword = '';
    this.userId = this.userService.loggedInUserId;
  }

  constructor(private userService: UserService) {
    this.newPassword = '';
    this.userId = this.userService.loggedInUserId;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  onSubmitNewPassword() {
    this.userService.changePassword(this.userId, this.newPassword).then(
      response => {
        this.isExpanded = false;
      }
    )
  }
}
