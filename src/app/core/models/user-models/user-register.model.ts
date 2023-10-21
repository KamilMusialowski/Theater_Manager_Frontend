import {SystemRoleModel} from "../system-role-models/system-role.model";

export class UserRegisterModel {
  private firstName1: string;
  private firstName2: string;
  private lastName: string;
  private email: string;
  private password: string;
  private phoneNumber: string;
  private sex: string;
  private systemRoles: Array<SystemRoleModel>;


  constructor(firstName1: string, firstName2: string, lastName: string, email: string, password: string, phoneNumber: string, sex: string, systemRoles: Array<SystemRoleModel>) {
    this.firstName1 = firstName1;
    this.firstName2 = firstName2;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.sex = sex;
    this.systemRoles = systemRoles;
  }

  get _firstName1(): string {
    return this.firstName1;
  }

  set _firstName1(value: string) {
    this.firstName1 = value;
  }

  get _firstName2(): string {
    return this.firstName2;
  }

  set _firstName2(value: string) {
    this.firstName2 = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _phoneNumber(): string {
    return this.phoneNumber;
  }

  set _phoneNumber(value: string) {
    this.phoneNumber = value;
  }

  get _sex(): string {
    return this.sex;
  }

  set _sex(value: string) {
    this.sex = value;
  }


  get _systemRoles(): Array<SystemRoleModel> {
    return this.systemRoles;
  }

  set _systemRoles(value: Array<SystemRoleModel>) {
    this.systemRoles = value;
  }
}
