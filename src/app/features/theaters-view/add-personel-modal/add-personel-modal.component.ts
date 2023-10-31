import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CreateTheaterModalComponent} from "../create-theater-modal/create-theater-modal.component";
import {AgGridModule} from "ag-grid-angular";
import {ColDef, ValueFormatterParams} from "ag-grid-community";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-add-personel-modal',
  templateUrl: './add-personel-modal.component.html',
  styleUrls: ['./add-personel-modal.component.css'],
  imports: [
    AgGridModule
  ],
  standalone: true
})
export class AddPersonelModalComponent implements OnInit{

  ngOnInit() {
    this.getUsersToGrid();
  }

  constructor(private userService: UserService, private dialogRef: MatDialogRef<CreateTheaterModalComponent>) {
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'First name',
      field: 'firstName1',
      width: 150
    }, {
      headerName: 'Last name',
      field: 'lastName',
      width: 200
    }, {
      headerName: 'Email',
      field: 'email',
      width: 300
    }, {
      headerName: 'Roles',
      field: 'systemRoles',
      valueFormatter: this.userRolesFormatter.bind(this),
      width: 400
    }
  ];

  private _rowData: any[] = [];

  getUsersToGrid() {
    this.userService.getUsers().then(
      response => {
        this.rowData = response.data;
        console.log(this.rowData);
      }
    )
  }

  userRolesFormatter(params: ValueFormatterParams): string {
    if (params.value && Array.isArray(params.value)) {
      return params.value.map((role: { systemRole: string }) => role.systemRole).join(' ');
    } else {
      return '';
    }
  }


  get rowData(): any[] {
    return this._rowData;
  }

  set rowData(value: any[]) {
    this._rowData = value;
  }
}
