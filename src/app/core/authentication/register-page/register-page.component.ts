import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  @Output() onSubmitRegisterEvent = new EventEmitter();

  email: string = "";
  password: string = "";
  firstName1: string = "";
  firstName2: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  sex: string = "";

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "email": this.email,
      "password": this.password,
      "firstName1": this.firstName1,
      "firstName2": this.firstName2,
      "lastName": this.lastName,
      "phoneNumber": this.phoneNumber,
      "sex": "MALE"
    });
  }
}
