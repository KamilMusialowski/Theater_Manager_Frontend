import { Component } from '@angular/core';
import {UserEventsComponent} from "./user-events/user-events.component";
import {ChangePasswordViewComponent} from "./change-password-view/change-password-view.component";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  imports: [
    UserEventsComponent,
    ChangePasswordViewComponent
  ],
  standalone: true
})
export class UserViewComponent {

}
